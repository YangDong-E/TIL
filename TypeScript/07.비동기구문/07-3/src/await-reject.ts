// Promise.reject 사용할 때 비정상 종료를 해결하는 방법

const awaitReject = async () => {
    await Promise.reject(new Error('error'));
};

awaitReject().catch((err) => console.log('error', err.message)); // error: error
