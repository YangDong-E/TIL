1. 콜백 함수

일등 함수는 프로그래밍 언어가 제공하는 기능이고, 일등 함수 기능을 제공하는 언어에서 함수는 '함수 표현식'이라는 일종의 값이다.
그렇기 때문에 함수 표현식을 매개변수로 받을 수 있다는 것인데 매개변수 형태로 동작하는 함수를 콜백 함수라고 부른다.

ex)
const f = (callback: () => void): void => callback()

ex)

// init.ts
export const init = (callback: () => void): void => {
    console.log('default initialization finished.')
    callback()
    console.log('all initialization finished.')
}

// 실행 파일
import {init} from './init'
init(()=>console.log('custom initiaization finished.'))

// 실행 결과

default initialization finished.
custom initiaization finished.
all initialization finished.


2. 중첩 함수
함수형 언어에서 함수는 변수에 담긴 함수 표현식이므로 함수 안에 또 다른 함수를 중첩해서 구현할 수 있다.

ex)

const calc = (value: number, cd: (number) => void): void => {
    let add = (a,b) => a + b
    function multiply(a,b) {return a * b}

    let result = multiply(add(1,2), value)
    cd(result)
}
calc(30, (result: number) => console.log(`result is ${result}`)) // result is 90



