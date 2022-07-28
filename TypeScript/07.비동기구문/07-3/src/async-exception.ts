// async 함수의 예외 처리

const asyncException = async () => {
    throw new Error('error');
};
asyncException().catch((err) => console.log('error', err.message)); // error: error
