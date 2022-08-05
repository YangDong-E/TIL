import { f, g, h } from './f-g-h';
import { compose } from './compose';

const composedFGH = compose(h, g, f); // compose를 사용하여 수학에서 f ~> g ~> h를 프로그래밍으로 표현한 것
console.log(
    composedFGH('x'), // compose(h, g, f)로 만든 composeFGH는 1차 함수이므로 바로 호출이 가능하다.
    // 결과 : h(g(f(x)))
);
