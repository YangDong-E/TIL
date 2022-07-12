1. 배열 이해하기

자바스크립트에서 배열은 Array 클래스의 인스턴스이다.

ex)

let 배열 이름 = new Array(배열 길이)

Array 클래스의 인스턴스를 만든 후 push 메서드를 이용해 [1,2,3]으로 구성된 배열을 만든다.

ex)

let array = new Array
array.push(1); array.push(2); array.push(3)
console.log(array)  // [1,2,3]

하지만 이렇게 배열을 만드는 것은 번거롭기 때문에 단축 구문을 사용하여 쉽게 배열을 만들 수 있다.

2. 단축 구문

자바스크립트는 []라는 단축 구문을 제공하므로 이것을 사용하여 배열을 쉽게 만들 수 있다.

ex)

let numbers = [1,2,3]
let strings = ['Hello', 'World']
console.log(numbers, strings)   // [1, 2, 3] ['Hello', 'World']


3. 자바스크립트에서 배열은 객체다.

자바스크립트에서 배열은 Array 클래스의 인스턴스인데, 클래스의 인스턴스는 객체이기 때문에, 다른 언어와는 다르게 객체로 취급이 된다.

하지만 타입스크립트에서 배열의 타입은 '아이템 타입[]'이다.

ex)

let numArray: number[] = [1,2,3]
let strArray: string[] = ['Hello', 'World']

type IPerson = {name: string, age?: number}
let personArray: IPerson[] = [{name: 'Jack'}, {name: 'Jane', age: 32}]


4. 문자열과 배열 간 변환

타입스크립트에서는 문자 타입이 없고 문자열의 내용 또한 변경할 수 없기 때문에, 문자열을 가공하려면 먼저 문자열을 배열로 전환해야 한다.

문자열 -> 배열 전환 : String 클래스의 split 메서드 사용
배열 -> 문자열 전환 : Array 클래스의 join 메서드 사용

ex)

split(구분자: string): string[]

join(구분자: string): string



5. 