import { f, g, h } from './f-g-h';
import { pipe } from './pipe';

// pip 함수는 compose와 매개변수들을 해석하는 순서가 반대이므로, reverse하는 코드가 없다.
const piped = pipe(f, g, h); // pipe는 compose의 역순으로 함수들을 나열하면 compose와 똑같은 결과를 보인다.
console.log(
    piped('x'), // h(g(f(x)))
);
