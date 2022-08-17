1. 서술자

    - Array.filter 함수에서 사용되는 콜백 함수는 boolean 타입 값을 반환해야 한다.
    - 함수형 프로그래밍에서 boolean 타입 값을 반환해 어떤 조건을 만족하는지를 판단하는 함수를 '서술자'라고 한다.

2. 수의 크기를 판단하는 서술자

    ```javascript
        R.lt(a)(b): boolean     // a < b 이면 true. a가 b보다 작음
        R.lte(a)(b): boolean    // a <= b 이면 true. a가 b보다 작거나 같음
        R.gt(a)(b): boolean     // a > b 이면 true. a가 b보다 큼
        R.gte(a)(b): boolean    // a >= b 이면 true. a가 b보다 크거나 같음
    ```

    - 수의 크기를 판단하는 함수들은 주로 R.filter 함수와 결합해 포인트가 없는 함수 형태로 사용된다.
    - R.lte(b)는 직관적으로 ' b <= x'의 의미로 느껴지지 않기 때문에, R.flip(R.gte)(b)처럼 사용되기도 한다.

3. R.allPass 로직 함수

    ```javascript
        R.allPass(서술자 배열)  // 배열의 조건을 모두 만족하면 true
        R.anyPass(서술자 배열)  // 배열의 조건을 하나라도 만족하면 true
    ```

    - R.lt, R.gt처럼 boolean 타입의 값을 반환하는 함수들은 R.allPass와 R.anyPass라는 로직 함수를 통해 결합할 수 있다.

4. R.not 함수

    - R.not 함수는 입력값이 true이면 false를 반환하고, false이면 true를 반환하는 함수이다.
    - R.pipe로 R.not과 boolean 타입의 값을 반환한 함수와ㅏ 결합해 사용하여 구현할 수 있다.

5. R.ifElse 함수

    ```javascript
    R.ifElse(
        조건 서술자,
        true일 때 실행할 함수,
        false일 때 실행할 함수
    )
    ```

    - R.ifElse 함수는 세 가지 매개변수를 포함한다.
    - 첫 번째는 true/false를 반환하는 서술자
    - 두 번째는 선택자가 true를 반환할 때 실행할 함수
    - 세 번재는 선택자가 false를 반환할 때 실행할 함수
    -
