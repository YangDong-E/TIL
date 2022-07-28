1. async/await 구문

    - 마이크로소프트에서 C# 5.0을 발표하면서 비동기 프로그래밍 코드를 비약적으로 간결하게 구현할 수 있는 async와 await 구문을 제공
    - 이후 자바 스크립트와 타입스크립트를 포함해 많은 프로그래밍 언어가 이 구문을 차용했다.

    ```javascript
    const test = async () => {
        const value = await Promise.resolve(1);
        console.log(value); // 1
    };

    test();
    ```

2. await 키워드

    - await 키워드는 피연산자의 값을 반환해 준다.
    - 피연산자가 Promise 객체이면 then메서드를 호출해 얻은 값을 반환해 준다.

    ```javascript
        let value = await Promise 객체 혹은 값
    ```

3. async 함수 수정자

    - await 키워드를 사용하기 위해서는 항상 async라는 이름의 함수 수정자가 있는 함수 몸통에서만 사용이 가능하다.

    ```javascript
        const test1 = async() => {  // 화살표 함수 구문
            await Promise 객체 혹은 값
        }
        async function test2() {    // function 키워드 함수 구문
            await Promise 객체 혹은 값
        }
    ```

4. async 함수의 두 가지 성질

    - 일반 함수처럼 사용할 수 있다.
    - Promise 객체로 사용할 수 있다.

5. async 함수가 반환하는 값의 의미

    - async 함수는 값을 반환한다.
    - 이 반환값은 Promise 형태로 변환되므로 다음처럼 then 메서드를 호출해 async 함수의 반환값을 얻어야 한다.

6. async 함수의 예외 처리

    - async 함수에서 예외가 발생하면 프로그램이 비정상으로 종료된다.

    ```javascript
    const asyncException = async () => {
        throw new Error('error');
    };
    asyncException(); // 예외 발생 -> 비정상적으로 종료
    ```

    - 비정상적인 종료를 막으려면 일반 함수 호출방식이 아닌, 함수가 반환하는 프로미스 객체의 catch 메서드를 호출하는 형태로 코드를 작성해야 한다.

    ```javascript
    const asyncException = async () => {
        throw new Error('error');
    };
    asyncException().catch((err) => console.log('error', err.message)); // error: error
    ```

    - 만약 await 구문에서 Promise.reject 값이 발생하면 프로그램이 비정상적으로 종료된다.

    ```javascript
    const awaitReject = async () => {
        await Promise.reject(new Error('error'));
    };
    awaitReject(); // 비정상적으로 종료
    ```

7. async와 Promise.all
    - src/async-readFilePromise-test.ts에 대한 설명
        - readFilesAll 함수는 매개변수 filenames에 담긴 string[]타입 배열에 map 메서드를 적용해 Promise[]타입 객체로 전환
        - Promise 타입 개체로 변환된 것을 Promise.all 메서드를 사용해 단일 Promise 객체로 만든다.
        - 단일 Promise 객체에 await 구문을 적용해 해소된 결과값을 반환
        - readFilesAl 함수를 Promise 객체로 취급해 then과 catch 메서드를 then-체인 형태로 연결하여 두 파일을 출력하고 예외가 발생하더라도 비정상적으로 종료되지 않게 한다.
