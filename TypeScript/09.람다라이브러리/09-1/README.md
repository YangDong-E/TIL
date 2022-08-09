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
    > npm init --y
    > npm i -D typescript ts-node @types/node
    > mkdir src

    > npm i -S ramda
    > npm i -D @types/ramda
    ```
