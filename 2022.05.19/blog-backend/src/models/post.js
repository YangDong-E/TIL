import mongoose from 'mongoose';

const { Schema } = mongoose;

// 스키마를 만들 때 각 필드의 이름과 필드의 데이터 타입 정보가 들어있는 객체를 작성
// 필드의 기본 값으로는 defalut값을 설정해 주면 된다.
const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String], // 문자열로 이루어진 배열
    publishedDate: {
        type: Date,
        default: Date.now, // 현재 날짜를 기본값으로 지정
    },
    user: {
        _id: mongoose.Types.ObjectId,
        username: String,
    },
});

// 모델 생성 함수 mongoose.model
// 첫번째 파라미터로는 스키마 이름 이며 데이터 베이스에서는 스키마 이름을 정해주면 그 이름의 복수 형태로 데이터 베이스에 컬렉션 이름을 만든다.
// 예) Post --> posts
// 두번째 파라미터로는 스키마 객체를 넣어준다.
const Post = mongoose.model('Post', PostSchema);
export default Post;
