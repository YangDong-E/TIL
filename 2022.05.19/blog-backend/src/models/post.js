import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String], // 문자열로 이루어진 배열
    publishedDate: {
        type: Date,
        default: Date.now, // 현재 날짜를 기본값으로 지정
    },
});

// 모델 생성 함수 mongoose.model
// 첫번째 파라미터로는 스키마 이름 이며 데이터 베이스에서는 스키마 이름을 정해주면 그 이름의 복수 형태로 데이터 베이스에 컬렉션 이름을 만든다.
// 예) Post --> posts
// 두번째 파라미터로는 스키마 객체를 넣어준다.
const Post = mongoose.model('Post', PostSchema);
export default Post;
