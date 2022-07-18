1. filter 메서드

배열의 타입이 T[]일 때 배열의 filter 메서드는 아래 코드와 같이 설계된다.

ex)

filter(callback: (value: T, index?: number): boolean): T[]

ex)

import {range} from './range'

const array: number[] = range(1,10 +1)

let odds: number[] = array.filter((value) => value % 2 != 0)
let evens: number[] = array.filter((value) => value % 2 == 0)

console.log(odds,evens)     // [1,3,5,7,9] [2,4,6,8,10]


filter 메서드는 두 번째 매개변수에 index라는 선택 속성을 제공한다.

아래 예시는 index 값을 사용해 배열을 반으로 나누는 예시이다.

ex)

import {range} from './range'

const array: number[] = range(1, 10+1)
const half = array.length/2

let belowHalf: number[] = array.filter((v,index) => index < half)
let overHalf: number[] = array.filter((v,index) => index >= half)

console.log(belowHalf,overHalf)     // [1,2,3,4,5] [6,7,8,9,10]



2. map 메서드

배열의 타입이 T[]일 때 map 메서드는 아래 코드와 같이 설계된다.
filter와 달리 map 메서드는 입력 타입과 다른 타입의 배열을 만들 수 있다.

ex)

map(callback: (value: T, index?: number): Q): Q[]

ex)

import {range} from './range'

let squres: number[] = range(1, 5+1)
    .map((val: number) => val * val)
console.log(squres)     // [1,4,9,16,25]


number[] 타입 배열을 string[]타입 배열로 가공하는 예시

ex)

import {range} from './range'

let names: string[] = range(1, 5+1)
    .map((val, index) => `[${index}]: ${val}`)
console.log(names)  // ['[0]:1','[1]:2','[2]:3','[3]:4','[4]:5']




3. reduce 메서드

선언형 프로그램에서 사용한 fold 함수는 타입스크립트 배열의 reduce 메서드로 대체할 수 있다.

배열의 타입이 T[]일 때 배열의 reduce 메서드는 아래 코드와 같이 설계된다.

ex)

reduce(callback: (result: T, value: T), initialValue: T): T

ex)

import {range} from './range'

let reduceSum: number = range(1, 100+1)
    .reduce((result: number, value: number)=> result + vallue, 0)
console.log(reduceSum)  // 5050



배열의 각 아이템을 모두 곱하는 코드 구현 예시

아이템을 곱할 때는 어떤 수든 0을 곱하면 결과는 0이므로 reduce 메서드의 두 번째 인수는 0이 아니라 1을 전달해야 한다.

ex)

import {range} from './range'

let reduceSum: number = range(1, 10+1)
    .reduce((result:number, value: number) => result * value, 1)
console.log(reduceSum)  // 3628800