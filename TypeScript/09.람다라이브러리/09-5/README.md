1. R.trim 함수

    ```javascript
    import * as R from 'ramda';

    const words: string[] = R.split(' ')(`Hello wolrd!, I'm Peter.`);
    console.log(words); // ['Hello', 'world!,', 'I'm', 'Peter.']
    ```

    - R.trim 함수는 문자열의 앞뒤의 공백을 제거해 준다.

2. R.toLower 함수 와 R.toUpper

    ```javascript
    import * as R from 'ramda';

    console.log(
        R.toUpper('Hello'), // HELLO
        R.toLower('HELLO'), // hello
    );
    ```

    - R.toLower 함수는 문자열에서 대문자를 모두 소문자로 전환해 준다.
    - R.toUpper 함수는 문자열에서 소문자를 모두 대문자로 전환해 준다.

3. R.split 함수 와 R.join 함수

    ```javascript
    // R.split
    문자열 배열 = R.split(구분자)(문자열)
    // R.join
    문자열 = R.join(구분자)(문자열 배열)
    ```

    - R.split 함수는 구분자를 사용해 문자열을 배열로 바꿔준다.
    - R.join 함수는 구분자를 사용해 문자열 배열을 문자열로 바꿔준다.

4. toCamelCase 함수 만들기

    - 타입스크립트나 자바스크립트에서 문자열은 readonly 형태로만 사용할 수 있다.
    - 문자열을 가공하려면 일단 문자열을 배열로 전환해야 한다.
    - 그 후 만든 toCamel 함수를 사용하여 임의의 문자열을 프로그래밍에서 심벌의 이름을 지을 때 많이 사용하는 Camel 표기법으로 바꿔준다.

    - 동작하는 순서
        - 동작하는 함수들을 pipe 함수 조합한다.
        - R.trim 함수를 사용하여 문자열의 앞뒤 공백을 제거한다.
        - R.split(매개변수) 함수로 전달받은 문자열을 구분자로 삼아 배열로 전환한다.
        - R.map(R.toLower)를 사용하여 배열에 있는 모든 문자열을 소문자로 변환한다.
        - 그 후 배열에서 두 번째 문자열부터 첫 문자만 대문자로 변경한다.
        - R.join을 사용하여 가공된 배열을 문자열로 전환한다.

5. 공부를 진행하면서 에러 발생 후 해결
   toCamelCase 함수를 만들면서 에러가 발생하였는데, Parameter has a name but no type. 에러가 발생하였다.
   이것 에러는 매개변수의 이름은 있지만 타입 에러가 발생한 것이라고 하는데, 해결 방법으로는
   콘솔을 보며 에러가 발생한 매개변수에 :any로 타입을 지정해주어서 해결하였다.
