import Post from '../../models/post';
import mongoose from 'mongoose';
// 객체를 검증하기 위해 각 값을 if 문으로 비교하는 것이 아닌 Joi라는 라이브러리를 사용
import Joi from 'joi';

// 요청을 검증하는 방법으로 잘못된 id가 전달됐는지, id 값이 올바른 ObjectId인지 검증하는 방법

const { ObjectId } = mongoose.Types;
// 여러 라우트에 쉽게 적용할 수 있게 checkObjectId라는 미들 웨어를 만들었다.
export const getPostById = async (ctx, next) => {
    const { id } = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 400; // Bad Request
        return;
    }
    try {
        const post = await Post.findById(id);
        // 포스트가 존재하지 않을 때
        if (!post) {
            ctx.status = 404; // Not Found
            return;
        }
        ctx.state.post = post;
        return next();
    } catch (e) {
        ctx.throw(500, e);
    }
};

// id로 찾은 포스트가 로그인 중인 사용자가 작성한 포스트인지 확인해주는 미들웨어
export const checkOwnPost = (ctx, next) => {
    const { user, post } = ctx.state;
    // MongoDB에서 조회한 데이터의 id 값을 문자열과 비교할 때는 반드시 .toString()을 해 주어야 한다.
    if (post.user._id.toString() !== user._id) {
        ctx.status = 403;
        return;
    }
    return next();
};

/*
    POST /api/posts
    {
        title: '제목',
        body: '내용',
        tags: ['태그1','태그2]
    }
*/

export const write = async (ctx) => {
    const schema = Joi.object().keys({
        // 객체가 다음 필드를 가지고 있음을 검증
        title: Joi.string().required(), // required()가 있으면 필수 항목
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required(), // 문자열로 이루어진 배열
    });

    // 검증하고 나서 검증 실패인 경우 에러 처리
    // ctx.request.body를 검증해준다.
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }

    const { title, body, tags } = ctx.request.body;
    // 포스트의 인스턴스를 만들 때는 new 키워드를 사용한다.
    // 생성자 함수의 파라미터에 정보를 지닌 객체를 넣어준다.
    const post = new Post({
        title,
        body,
        tags,
        user: ctx.state.user,
    });
    // await를 사용하기 때문에 try/catch 문으로 오류를 처리한다.
    try {
        // save()함수를 사용해서 데이터베이스에 저장이 된다.
        // 하지만 함수의 반환 값이 Promise이므로 async/await 문법으로 데이터베이스 저장 요청을 완료할 때까지 await를 사용하여 대기할 수 있다.
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    GET /api/posts
*/

export const list = async (ctx) => {
    // query는 문자열이기 때문에 숫자로 변환해 주어야 합니다.
    // 값이 주어지지 않았다면 1을 기본으로 사용합니다.
    const page = parseInt(ctx.query.page || '1', 10);

    if (page < 1) {
        ctx.status = 400;
        return;
    }
    try {
        // find()함수를 호출한 후에는 exec()를 붙여 주어야 서버에 쿼리를 요청한다.
        // 페이지네이션을 위해 함수를 넣어준다.
        const posts = await Post.find()
            // 포스트를 역순으로 불러오기
            .sort({ _id: -1 })
            // 한 번에 보이는 개수 제한
            .limit(10)
            // 페이지 기능 구현
            // page 값은 query에서 받아오며 값이 없으면 1로 간주한다. 또한 10이라는 파라미터는 10개를 제외하고 그 다음 데이터를 불러온다.
            .skip((page - 1) * 10)
            // 데이터를 조회할 때 lean() 함수를 사용하면 데이터를 처음부터 JSON 형태로 조회할 수 있다.
            .lean()
            .exec();

        // 내용 길이 제한
        // 위에서 lean() 함수를 사용하여 JSON형태로 받아와 .toJSON()함수를 실행할 필요가 없어졌고,
        // map을 활용하여 200글자가 넘어가면 ...을 붙이고 문자열을 자르는 기능을 구현
        const postCount = await Post.countDocuments().exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10));
        ctx.body = posts.map((post) => ({
            ...post,
            body:
                post.body.length < 200
                    ? post.body
                    : `${post.body.slice(0, 200)}...`,
        }));
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    GET /api/posts?username=&tag=&page=
*/

export const read = async (ctx) => {
    // query는 문자열이기 대문에 숫자로 변환해 주어야 합니다.
    // 값이 주어지지 않았다면 1을 기본으로 사용합니다.
    const page = parseInt(ctx.query.page || '1', 10);
    if (page < 1) {
        ctx.status = 400;
        return;
    }
    const { tag, username } = ctx.query;
    // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
    const query = {
        ...(username ? { 'user.username': username } : {}),
        ...(tag ? { tags: tag } : {}),
    };

    try {
        const posts = await Post.find(query)
            .sort({ _id: -1 })
            .limit(10)
            .skip((page - 1) * 10)
            .lean()
            .exec();
        const postCount = await Post.countDocuments(query).exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10));
        ctx.body = posts.map((post) => ({
            ...post,
            body:
                post.body.length < 200
                    ? post.body
                    : `${post.body.slice(0, 200)}...`,
        }));
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    DELETE /api/posts/:id
*/

export const remove = async (ctx) => {
    const { id } = ctx.params;
    try {
        // 데이터를 삭제할 때는 여러 종류의 함수를 사용할 수 있는데
        // remove() - 특정 조건을 만족하는 데이터를 모두 지운다.
        // findByIdAndRemove() - id를 찾아서 지운다.
        // findOneAndRemove() - 특정 조건을 만족하는 데이터 하나를 찾아서 지운다.
        // 중에서 findByIdAndRemove()를 사용하였다.
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204; // No Content (성공하기는 했지만 응답할 데이터는 없음)
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    PATCH /api/posts/:id
    {
        title: '수정',
        body: '수정 내용',
        tags: ['수정','태그']
    }
*/

export const update = async (ctx) => {
    const { id } = ctx.params;
    // write에서 사용한 schema와 비슷한데, required()가 없다.
    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
        tags: Joi.array().items(Joi.string()),
    });

    // 검증하고 나서 검증 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }
    try {
        // findByIdAndUpdate()함수를 사용해서 id를 찾은 뒤 업데이트를 해준다.
        // 이 함수에서는 세 가지 파라미터를 넣어주어야 하는데, 첫 번째 파라미터로는 id, 두 번째 파라미터는 업데이트 내용, 세 번째 파라미터는 업데이트의 옵션을 넣어주어야 한다.
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
            // false일 때는 업데이트되기 전의 데이터를 반환 합니다.
        }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};
