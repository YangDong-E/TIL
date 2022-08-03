import { FirstOrderFunc, SecondOrderFunc } from './function-signature';
import { add } from './second-order-func';

const add1: SecondOrderFunc<number, number> = add(1); // add1은 부분함수 (SecondOrderFunc는 2차 고차함수이기 때문에 함수 호출연산자는 2개이다.)
console.log(
    add1(2), // 3
    add(1)(2), // 3
);
