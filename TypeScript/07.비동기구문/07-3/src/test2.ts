// function 함수 형태의 async 함수 구현 예시

export async function test2() {
    let value = await 'hello';
    console.log(value); // hello
    value = await Promise.resolve('hello');
    console.log(value); // hello
}
