어떤 프로그래밍 언어에는 튜플 이라는 타입이 존재한다.
하지만 자바스크립트에서는 튜플이 없어 단순히 배열의 한 종류로 취급이 된다.

여러타입에 대응하는 any[]타입 배열을 선언 할 수 있는데, any[]형태는 타입스크립트의 타입 기능을 무력화하므로 타입스크립트는 튜플의 타입 표기법을 배열과 다르게 선언할 수 있다.

ex)

// any타입 배열 선언
let tuple:any[] = [true, 'the result is ok']

// 타입스크립트 튜플으 타입 표기법
const array:number[] = [1,2,3,4]
const tuple: [boolean,string] = [true, 'the result is ok']


1. 튜플에 타입 별칭 사용하기

튜플을 사용할 때는 타입 별칭으로 튜플의 의미를 명확하게 하는데, 튜플을 사용할 때 타입을 지정하는 것보다 타입 별칭을 사용해 이 튜플이 어떤 용도로 사용되는지 분명하게 알려주는 것이 좋다.

ex)

// 타입 지정 튜플
const tuple: [boolean,string] = [true, 'the result is ok']

// 타입 별칭 사용 튜플
export type ResultType = [boolean, string]

ex)

// 타입 별칭을 사용한 튜플을 가져와 불순한 함수를 순수 함수로 바꿔주는 전형적인 코드 설계

import {ResultType} from './ResultType'

export const doSomething = (): ResultType => {
    try{
        throw new Error('Some error occurs...')
    } catch(e){
        return [false, e.message]
    }
}




2. 튜플에 적용하는 비구조화 할당

튜플은 물리적으로는 배열이므로 배열처럼 인덱스 연산자나 비구조화 할당문을 적용할 수 있다.

ex)

import {doSomething} from './doSomething'

const [result, errorMessage] = doSomething()
console.log(result, errorMessage)   // false Some error occurs...


3. 정리

함수형 프로그래밍에서 배열은 가장 핵심적인 기능이다.