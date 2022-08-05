1. 함수 조합

    - 작은 기능을 구현한 함수를 여러번 조합해 더 의미 있는 함수를 만들어 내는 프로그램 설계 기법
    - 함수 조합을 할 수 있는 언어들은 compose 혹은 pipe라는 이름의 함수를 제공하거나 만들 수 있다.

    ```javascript
    x ~> f ~> g ~> h ~> y
    ```

2. pipe 와 compose 함수 분석

    - pipe 함수는 pipe(f), pipe(f, g), pipe(f, g, h)처럼 가변 인수 방식으로 동작하므로 매개 변수를 다음처럼 설정한다.

    ```javascript
    export const pipe = (...functions)
    ```

    - 하지만 가변인수 funtions의 타입을 설정하기는 어렵다. 각 함수 f, g, h의 시그니처가 달라 타입이 모두 다르기 때문에 제네릭 타입을 적용하기 힘들다.
    - 그렇기 때문에 functions은 자바스크립트 타입 Function들의 배열인 Functions[]으로 설정한다.

    ```javascript
    export const pipe = (...functions: Function[])
    ```

    - pipe 함수는 functions 배열을 조합하여 어떠한 함수를 반환해야 하므로 반환 타입은 Function으로 설정한다.

    ```javascript
    export const pipe = (...functions: Function[]): Function
    ```

    - pipe로 조합된 결과 함수는 애리티가 1이다.
    - 따라서 매개변수 x를 입력받는 함수를 작성해야한다.
    - 제네릭 타입으로 표현하면 타입 T의 값 x를 입력받아 T타입의 값을 반환하는 함수가 된다.

    ```javascript
    export const pipe =
        <T>(...functions: Function[]): Function =>
        (x: T) =>
            T;
    ```

    - 함수 몸통 구현은 functions 배열에 [f,g,h]가 있다고 가정할 때 h(g(f(x)))형태의 함수를 만들어야 한다.

    ```javascript
    export const pipe =
        <T>(...functions: Function[]): Function =>
        (x: T) =>
        (T) => {
            // functions의 함수 몸통 내용 [f, g, h]
        };
    ```

    - 배열이 제공하는 reduce 메서드를 사용하여 reduce 메서드의 초기값을 변수 x로 설정하면 <함수> 부분만 구현하면 가능하다.

    ```javascript
    export const pipe =
        <T>(...functions: Function[]): Function =>
        (x: T) =>
            T => {
                return functions.reduce(<함수>, x)
            }
    ```

    - <함수> 부분은 (value, func)형태의 매개변수 구조를 가져야한다.
    - 그 이유는 reduce 메서드의 두 번째 매개변수(x)는 항상 배열의 아이템이기 때문이다.

    ```javascript
    export const pipe =
        <T>(...functions: Function[]): Function =>
        (x: T) =>
        (T) => {
            return functions.reduce((value, func) => func(value), x);
        };
    ```

    - functions 배열의 마지막 아이템이 reduce 메서드의 func 매개변수에 입력되면 최종 결과 값을 반환하는 순서이다.

    - compose 함수는 pipe 함수와 매개변수 방향이 반대이다.
    - 즉, pip(f, g, h)는 compose(h, g, f)와 같다.
    - 직관적으로 코드는 functions.reverse()를 호출하는 코드를 작성한 뒤 나머지 코드는 pipe와 똑같이 작성하면 된다.
    - compose는 순수 함수의 모습으로 동작해야 하기 때문에, functions을 전개 연산자로 전개한 다음, 그 내용을 깊은 복사를 하는 변수를 만들어야 한다.

    ```javascript
    export const compose = <T>(...functions: readonly Function[]): Function => (x: T) => T => {
        const deepCopiedFunctions = [...functions]
        deepCopiedFunctions.reverse()
    }
    ```

    ```javascript
    export const compose = <T>(...functions: readonly Function[]): Function => (x: T) => T => {
        const deepCopiedFunctions = [...functions]
        deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
    }
    ```
