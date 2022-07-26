1. Promise?
    - 자바스크립트 언어에서 프로미스는 ES6 버전에서 정식 기능으로 채택되었다.
    - 자바스크립트에서 프로미스는 Promise라는 이름의 클래스이다.
    - Promise를 사용하기 위해서는 new 연산자를 적용해 프로미스 객체를 만들어야 한다.
    - new 연산자로 프로미스 객체를 만들 때 콜백 함수를 제공해야 한다.
    ```javascript
        const promise = new Promise(콜백 함수)
    ```
    - Promise의 콜백 함수는 resolve와 reject라는 두 개의 매개변수를 가진다.
    ```javascript
    (resolve, reject) => {};
    ```
    - 타입스크립트에서는 Promise는 제네릭 클래스 형태로 사용한다.
    ```javascript
        const numPromise: Promise<number> = new Promise<number>(콜백 함수)
        const strPromise: Promise<string> = new Promise<string>(콜백 함수)
        const arrayPromise: Promise<number[]> = new Promise<number[]>(콜백 함수)
    ```
    - Promise 콜백함수의 resolve와 reject함수를 매개변수로 받는 예시
    ```javascript
        new Promise<T>((
            resolve: (sucessValue: T) => void,
            reject: (any) = void
        ) => {
            // 코드 구현
        })
    ```
