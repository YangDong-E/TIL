1. 렌즈란?

    - 하스켈 언어의 Control.Lens 라이브러리 내용 중 자바스크립트에서 동작할 수 있는 게터(getter)와 세터(setter)의 기능만을 람다 함수로 구현한 것
    - 람다의 렌즈 기능을 활용하여 객체의 속성값을 얻거나 설정하는 등의 작업을 쉽게 할 수 있다.

    - 렌즈의 진행 순서
        - R.lens 함수로 객체의 특정 속성에 대한 렌즈를 만든다.
        - 렌즈를 R.view 함수에 적용해 속성값을 얻는다.
        - 렌즈를 R.set함수에 적용해 속성값이 바뀐 새로운 객체를 얻는다.
        - 렌즈와 속성값을 바꾸는 함수를 R.over 함수에 적용해 값이 바뀐 새로운 객체를 얻는다.

2. R.prop와 R.assoc 함수

    - R.prop 함수는 'property'의 앞 네 글자를 따서 만든 이름이며, 객체의 특정 속성값을 가져오는 함수이다.
    - R.prop 함수처럼 동작하는 함수를 게터(getter)라고 한다.
    - R.assoc 함수는 객체의 특정 속성값을 변경할 때 사용하는 함수이다.
    - R.assoc 함수처럼 동작하거나 같은 목적으로 사용하는 함수를 세터(setter)라고 한다.

3. R.lens 함수

    - 렌즈 기능을 사용하기 위해서 렌즈를 만들어야 한다.
    - 렌즈는 R.lens, R.prop, R.assoc의 조합으로 만들 수 있다.

    ```javascript
    export const makeLens = (propName: string) =>
        R.lens(R.prop(propName), R.assoc(propName));
    ```

4. R.view, R.set, R.over 함수

    - 렌즈를 만든 후 R.view, R.set, R.over 함수에 렌즈를 적용해 게터와 세터, setterUsingFunc과 같은 함수를 만들 수 있다.
    - R.view 함수는 getter를 만드는 함수이다.
    - R.set 함수는 setter를 만드는 함수이다.
    - R.over 함수는 setterUsingFunc 함수를 만드는 함수이다.
    - 이렇게 코드를 작성할 시 나중에 속성 이름을 변경할 때 코드의 다른 부분에 영향을 주지 않는 장점이 있다.

5. R.lensPath 함수

    - 람다 라이브러리에서 객체의 중첩 속성을 '경로(path)'라고 한다.
    - 긴 경로의 속성을 렌즈로 만들기 위해서 사용되는 것이 R.lensPath 함수이다.

    ```javascript
    렌즈 = R.lensPath(['location', 'coordinates', 'longitude']);
    ```
