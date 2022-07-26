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

    - Promise는 비동기 API 사용에서 나타나는 콜백 지옥 형태의 코드를 어느정도 관리할 수 있는 코드 형태로 바꿔준다.

2. Promise.resolve 메서드

    - Promise 클래스는 resolve라는 클래스 메서드(정적 메서드)를 제공한다.
    - Promise객체를 생성할 때 resolve 함수를 호출하는데,Promise.resolve는 이것을 클래스 메서드로 구현한 것 이다.
    - Promise.resolve(값) 형태로 호출하면 항상 값은 then 메서드에서 얻을 수 있다.

3. Promise.reject 메서드

    - Promise.reject(Error 타입 객체)를 호출하면 'Error 타입 객체'는 항상 catch 메서드의 콜백 함수에서 얻을 수 있다.

4. Promise.all 메서드

    - Array 클래스는 every라는 이름의 인스턴스 메서드를 제공한다.
    - every 메서드는 배열의 모든 아이템이 어떤 조건을 만족하면 true를 반환한다.
    - Promise 클래스는 every처럼 동작하는 all이라는 이름의 클래스 메서드를 제공한다.

    ```javascript
        all(프로미스 객체 배열: Promise[]): Promise<해소(resolve)된 값들의 배열(혹은 any)>
    ```

    - Promise.all 메서드는 Promise 객체들을 배열 형태로 받아, 모든 객체를 대상으로 resolve된 값들의 배열로 만들어 준다.
    - 하지만 Promise.all 메서드는 이러한 내용으로 구성된 또 다른 Promise 객체를 반환하므로 resolve된 값들의 배열은 then 메서드를 호출해서 얻는다.
    - 만약, 배열에 담긴 Promise 객체 중 reject 객체가 생기면 그 거절된 값을 담은 Promise.reject 객체를 반환하고 이 값은 catch 메서드를 통해 얻는다.

5. Promise.race 메서드
    - Array 클래스는 배열의 내용 중 하나라도 조건을 만족하면 true를 반환하는 some이라는 인스턴스 메서드를 제공한다 .
    - Promise.race 클래스 메서드는 배열에 담긴 프로미스 객체 중 하나라도 resolve되면 이 값을 담은 Promise.resolve 객체를 반환한다.
    - 반대로 거절 값이 가장 먼저 발생되면 Promise.reject 객체를 반환한다.
    ```javascript
        race(프로미스 객체 배열: Promise[]): Promise<가장 먼저 해소된 객체의 값 타입(혹은 Error)>
    ```
    - 배열에 담긴 프로미스 객체들의 순서대로 실행하면서 먼저 resolve나 reject는 값에 따라 호출이 결정된다.
