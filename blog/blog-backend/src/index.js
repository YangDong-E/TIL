const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

router.get('/', (ctx) => {
    ctx.body = '홈';
});

// router.get('/about', (ctx) => {
//     ctx.body = '소개';
// });

router.get('/about/:name?', (ctx) => {
    const { name } = ctx.params;
    // name의 존재 유무에 따라 다른 결과 출력
    ctx.body = name ? `${name}의 소개` : '소개';
});

router.get('/posts', (ctx) => {
    const { id } = ctx.query;
    // id의 존재 유무에 따라 다른 결과 출력
    ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
});

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// 서버를 띄울 포트 번호와 콘솔창에 나올 문장
app.listen(4000, () => {
    console.log('Listening to port 4000');
});

// 미들 웨어 함수를 애플리케이션에 등록

// app.use(async (ctx, next) => {
//     console.log(ctx.url);
//     console.log(1);
//     if (ctx.query.authorized !== '1') {
//         ctx.status = 401; // Unauthorized
//         return;
//     }
//     await next();
//     console.log('END');

//     async 와 await를 사용하기 전
//     next().then(() => {
//         console.log('END');
//     });
// });

// app.use((ctx, next) => {
//     console.log(2);
//     next();
// });

// app.use((ctx) => {
//     ctx.body = 'hello world';
// });
