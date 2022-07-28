// 화살표 함수 형태의 async 함수 구현 예시

export const test1 = async () => {
    let value = await 1;
    console.log(value); // 1
    value = await Promise.resolve(1);
    console.log(value); // 1
};
