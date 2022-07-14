1. 프로그래밍에는 선언형과 명령형이 있는데, 명령형은 CPU 친화적인 저수준 구현 방식이고
선언형은 명령형 방식 위에서 동작하는 인간에게 좀 더 친화적인 고수준 구현 방식이다.


2. 명령형 프로그래밍이란?
프로그램의 기본 형태는 입력 데이터를 얻고 가공한 다음, 결과를 출력하는 형태로 구성된다.

- 입력 데이터 얻기
- 입력 데이터 가공해 출력 데이터 생성
- 출력 데이터 출력

명령형 프로그래밍에서는 여러 개의 데이터를 대상으로 할 때 for 문을 사용해 구현한다.

ex)

for( ; ; ){
    입력 데이터 얻기
    입력 데이터 가공해 출력 데이터 생성
    출력 데이터 출력
}


3. 선언형 프로그래밍이란?
시스템 자원의 효율적인 운용보다는 일괄된 문제 해결 구조에 더 집중한다.
명령형 프로그래밍과 다르게 for 문을 사용하지 않고 모든 데이터를 배열에 담는다.
그 후 문제가 해결될 때까지 끊임없이 또 다른 형태의 배열로 가공하는 방식으로 구현한다.

- 문제를 푸는 데 필요한 모든 데이터 배열에 저장
- 입력 데이터 배열을 가공해 출력 데이터 배열 생성
- 출력 데이터 배열에 담긴 아이템 출력



4. 예시

4-1. 1부터 100까지 더하기 문제 풀이

// 명령형 프로그래밍 방식

let sum = 0
for(let val = 1; val <= 100;)
    sum += val++
console.log(sum)    // 5050

// 선언형 프로그래밍 방식

// range.ts
export const range = (from:number, to: number): number[] =>
    from < to ? [from, ...range(from + 1, to)] : []

// declarative-sum.ts
import {range} from './range'
import {fold} from './fold'

// 입력 데이터 생성
let numbers: number[] = range(1, 100 + 1)
// 입력 데이터 가공
let result = fold(numbers, (result, value) => result + value, 0)
console.log(numbers)    //[1,2, ... , 100]
console.log(result)     // 5050


// fold.ts

// 배열 안의 수를 더하는 데이터 가공

export const fold = <T>(array: T[], callback: (result: T, val: T), initValue: T) => {
    let result: T = initValue
    for(let i = 0; i < array.length; ++i) {
        const value = array[i]
        result = callback(result, value)
    }
    return result
}

