import mongoose, { Schema } from 'mongoose';
// 단방향 해싱 함수를 지원 해주는 라이브러리
import bcrypt from 'bcrypt';
// JWT 토큰을 만들기 위한 모듈 설치
import jwt from 'jsonwebtoken';

// User 스키마 작성
const UserSchema = new Schema({
    username: String,
    hasedPassword: String,
});

// 인스턴스 메서드 만들기
// 인스터스 메서드 : 모델을 통해 만든 문서 인스턴스에서 사용할 수 있는 함수
// 인스턴스 메서드를 작성할 때는 화살표 함수가 아닌 function 키워드를 사용하여 구현해야 한다.
// 이유는 함수 내부에서 this에 접근해야 하기 때문이다. this - 문서 인스턴스
UserSchema.methods.setPassword = async function (password) {
    const hash = await bcrypt.hash(password, 10);
    this.hasedPassword = hash;
};

// 인스턴스 메서드
UserSchema.methods.checkPassword = async function (password) {
    const result = await bcrypt.compare(password, this.hasedPassword);
    return result; // true / false
};

// 스태틱 메서드 만들기
// 스태틱 메서드 : 모델에서 바로 사용할 수 있는 함수
// findByUsername이라는 메서드를 작성하는데, 이 메서드는 username으로 데이터를 찾을 수 있게 해준다.
// this - 모델(User)
UserSchema.statics.findByUsername = function (username) {
    return this.findOne({ username });
};

// 인스턴스 메서드
// serialize라는 메서드를 만들어서 hashedPassword필드가 응답되지 않게 데이터를 JSON으로 변환 후 delete를 통해 필드를 지워주는 작업을 한다.
UserSchema.methods.serialize = function () {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
};

// 인스턴스 메서드
// 토큰 발급하기 (generateToken)
UserSchema.methods.generateToken = function () {
    const token = jwt.sign(
        // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣습니다.
        {
            _id: this.id,
            username: this.username,
        },
        process.env.JWT_SECRET, // 두 번째 파라미터에는 JWT 암호를 넣습니다.
        {
            expiresIn: '7d', // 7일 동안 유효함
        },
    );
    return token;
};

// User 모델 작성
const User = mongoose.model('User', UserSchema);
export default User;
