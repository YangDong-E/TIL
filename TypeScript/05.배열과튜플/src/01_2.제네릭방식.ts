1. 제네릭 방식 타입

배열을 다루는 함수를 작성할 때 number[]와 같이 타입이 고정된 함수를 만들기보다 T[]형태로 배열의 아이템 타입을 한꺼번에 표현하는 것이 편리한데
여기서 타입을 T라고 지정을 한것처럼 타입을 변수로 취급하는 것을 제네릭 타입이라고 한다.

ex)

// 배열의 길이를 얻는 함수
const arrayLength = (array) => array.length

// 제네릭 방식
const arrayLength = (array: T[]): number => array.length


// 배열의 길이를 구하는 함수와 배열이 비어있는지를 판별하는 제네릭 함수
export const arrayLength = <T>(array: T[]): number => array.length
export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0


// 작성한 함수 적용 예시
import {arrayLength, isEmpty} from './arrayLength'
let numArray: number[] = [1,2,3]
let strArray: string[] = ['Hello', 'World']

type IPerson = {name: string, age?: number}
let personArray: IPerson[] = [{name: 'Jack'},{name: 'Jane', age: 32}]

console.log(
    arrayLength(numArray),      // 3
    arrayLength(strArray),      // 2
    arrayLength(personArray),   // 2
    isEmpty([]),                // true
    isEmpty([1])                // false
)




2. 제네릭 함수의 타입 추론

제네릭 형태로 구현된 함수는 원칙적으로는 타입변수를 명시해주어야 하지만 코드가 번거로워서 타입 추론을 통해 타입 변수 부분을 생략할 수 있다.

ex)

// 타입 추론 X

함수이름<타입 변수>(매개변수)

// 타입 추론 O

함수이름(매개변수)


ex)

const identity = <T>(n: T): T => n
console.log(
    // 타입 추론 X
    identity<boolean>(true),    // true
    // 타입 추론 O
    identity(true)              // true
)



3. 제네릭 함수의 함수 시그니처

타입스크립트는 어떠한 경우에선 함수 시그니처의 매개변수 부분에 변수 이름을 기입하라고 요구를 한다.

ex)

// 에러 내용
error: 'xxxx' 식별자가 중복되었습니다.

이런 오류가 발생하면 타입스크립트가 해석하지 못하는 부분에 변수를 삽입하고 이 변수에 타입을 명시해서 해결할 수 있다.

ex)

// 에러 코드

const fixed = (cb:(a: number, number?) => number): void = {}

// 해결 코드

const fixed = <T>(cb: (arg: T, i?: number) => number): void => {}



4. 전개 연산자

...은 전개 연산자라고 하는데 이것은 배열에도 적용이 가능하다.
배열에서 전개 연산자는 두 배열과 특정 값을 동시에 결합을 할 수 있게 해준다.

ex)

let array1: number[] = [1]
let array2: number[] = [2,3]
let mergedArray: number[] = [...array1, ...array2, 4]
console.log(mergedArray)    // [1,2,3,4]


5. range 함수 구현

ramda라는 외부 패키지가 제공하는 R.range라는 함수가 있지만 배열에 전개 연산자를 적용하면 R.range와 같은 함수를 쉽게 만들 수 있다.

아래 코드의 range 함수는 재귀 함수 스타일로 동작하며. from에서 to까지 수로 구성된 배열을 생성해 준다.

ex)

export const range = (from:number, to: number): number[] => from < to ? [from, ...range(from+1,to)]: []

// 동작 테스트

import {range} from './range'
let numbers: numbert[] = range(1, 9+1)
console.log(numbers)    // [1,2,3,4,5,6,7,8,9]