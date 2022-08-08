import { pipe } from "./pipe";


const add = x = > y => x + y // add는 2차 고차 함수이므로, 
const inc = add(1)           // inc 함수는 add의 부분 함수이다.

const add3 = pipe(          // pipe 함수를 가지고 inc와 add(2) 두 부분 함수를 조합해서 만든 함수이다.
    inc,
    add(2)
)

console.log(                // add3는 일반 함수이므로 호출할 시 inc 함수가 호출되어 값 1에서 2로 되고, 이어서 add(2)를 거쳐서 최종 4라는 값이 만들어진다.
    add3(1) //4
)


// add3(1)  = inc의 add(1) + add3(1) -> 값 2 + add(2)의 값 = add3(1)최종 값 = 4