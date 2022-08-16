1. 선언형 프로그래밍

    - 보통 함수형 프로그래밍은 선언형 프로그래밍 방식으로 코드를 작성한다.
    - 선언형 프로그래밍에서 모든 입력 데이터는 단순 데이터보다 배열 형태를 주로 사용한다.
    - R.pipe 안에서는 console.log문을 사용할 수 없으므로, 반드시 R.tap 함수를 사용해야 한다.

    ```javascript
    import * as R from 'ramda';
    const value = 1;
    const newValue = R.inc(value); // 2

    const newArray = R.pipe(R.map(R.inc))([value]); // [2]
    ```

2. 사칙 연산 함수

    - 람다는 다음과 같은 사칙 연산 관련 함수들을 제공한다.

    ```javascript
    R.add(a: number)(b: number)         // a + b
    R.subtract(a: number)(b: number)    // a - b
    R.multiply(a: number)(b: number)    // a * b
    R.divide(a: number)(b: number)      // a / b
    ```

    - 사칙 연산 함수의 포인트가 있는 형태와 없는 형태

    ```javascript
    // R.add를 포인트가 있는 함수 형태로 inc라는 함수를 만든 예시
    const inc = (b: number): number => R.add(1)(b);
    // 포인트가 없는 함수형태로 만든 예시
    const inc = R.add(1);
    // inc를 R.map 함수에 포인트가 있는 함수 형태로 사용 예시
    R.map((n: number) => inc(n));
    // 위 코드를 간결하게 표현 (R.map(콜백함수))
    // inc는 그 자체를 콜백 함수로 사용될 수 있다.
    R.map(inc);
    // inc는 R.add(1)이기 때문에 다르게 작성도 가능하다.
    R.map(R.add(1));
    ```

3. R.addIndex 함수

    - Array.map은 두 번째 매개변수로 index를 제공하지만, R.map은 index 매개변수를 기본으로 제공하지 않는다.
    - R.map이 Array.map처럼 동작하려면 R.addIndex 함수를 사용해 R.map이 index를 제공하는 새로운 함수를 만들어야 한다.

    ```javascript
    indexMap((value: number, index: number) => R.add(number)(index));
    // 간결하게
    indexMap(R.add);
    ```

4. R.flip 함수

    - R.subtract, R.divide는 매개변수의 순서에 따라 값이 달라진다.
    - R.flip 함수는 2차 고차 함수의 매개변수 순서를 바꿔준다.

    ```javascript
    (a)(b) => a - b
    // R.flip 사용
    (a)(b) => b - a

    ```
