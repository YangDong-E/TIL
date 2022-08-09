1. ramda 패키지

    - compose나 pipe를 사용하는 함수 조합을 쉽게 할 수 있게 설계된 오픈소스 자바스크립트 라이브러리
    - 타입스크립트 언어와 100% 호환
    - compose와 pipe 함수 제공
    - 자동 커리(auto curry) 기능 제공
    - 포인트가 없는 고차 도움 함수 제공
    - 조합 논리 함수 일부 제공
    - 하스켈 렌즈 라이브러리 기능 일부 제공
    - 자바스크립트 표준 모나드 규격과 호환

2. ramda 패키지 구성

    - ramda 패키지는 많은 도움 함수를 제공한다.
        - 함수(function)
        - 리스트(list)
        - 로직(logic)
        - 수학(math)
        - 객체(object)
        - 관계(relation)
        - 문자열(string)
        - 타입(type)

3. 프로젝트 생성 순서

    ```
    1. 디렉터리 생성

    > npm init --y
    > npm i -D typescript ts-node @types/node
    > mkdir src

    2. ramda 패키지 설치

    > npm i -S ramda
    > npm i -D @types/ramda

    3. 가짜데이터를 만드는 chance 패키지 설치

    > npm i -S chance
    > npm i -D @types/chance

    4. package.json파일이 있는 곳에 tsconfig.json 파일 생성

    > tsc --init
    ```

4. tsconfig.json에서 noImplicitAny 속성값이 false인 이유
   람다 라이브러리는 자바스크립트를 대상으로 설계되었기 때문에 타입스크립트는 any타입을 완전히 자바스크립트적으로 해석해야 한다.
   그렇기 때문에 noImplicityAny 속성값을 false로 설정했다.

5. ramda 패키지 불러오기
    - 타입스크립트 소스코드에서 ramda 패키지를 불러와서 보통 R이라는 심벌로 사용한다.
    - R이라는 심벌을 사용하여 'R.함수명' 형식으로 람다가 제공하는 함수들을 사용한다.
    ```javascript
    import * as R from 'ramda';
    ```
    - 개발을 진행할 때는 심벌을 사용하지만 개발이 끝난 코드는 배포하기 전에 재구현 해주는 것이 바람직하다.
    ```javascript
    import { range } from 'ramda';
    ```
