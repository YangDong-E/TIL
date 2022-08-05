import { compose } from './compose';

const inc = (x) => x + 1; // const inc = (x: number): number => x + 1를 타입 주석을 생략하여 타입추론을 사용해 생략된 타입을 찾아서 실행

const composed = compose(inc, inc, inc); // compose의 동작으로 1 ~> inc ~> 2 ~> inc ~> 3 ~> inc ~> 4의 과정이 발생하여 inc함수를 세 번 연달아 호출하여 결괏값은 4이다.
console.log(
    composed(1), // 4
);
