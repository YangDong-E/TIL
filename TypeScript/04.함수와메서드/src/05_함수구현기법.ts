1. 매개변수 기본값 지정하기

선택적 매개변수는 항상 그 값이 undefined로 고정이 된다.
하지만 함수 호출 시 인수를 전달하지 않더라도 매개변수에 어떤 값을 설정하고 싶다면 매개변수의 기본값을 지정할 수 있는데, 이것을 디폴트 매개변수라고 한다.

ex)

(매개변수: 타입 = 디폴트 매개변수값)

ex)

export type Person = {name: string, age: number}

export const makePerson = (name: string, age: number = 10): Person => {
    const person = {name: name, age: age}
    return person
}

console.log(makePerson('Jack'))     // {name: 'Jack', age: 10}
console.log(makePerson('Jane, 33')) // {name: 'Jane', age: 33}


2. 객체 생성 시 값 부분을 생략할 수 있는 타입스크립트 구문

타입스크립트는 매개변수의 이름과 똑같은 이름의 속성을 가진 객체를 만들 수 있는데, 이때 속성값 부분을 생략할 수 있는 단축 구문을 제공한다.
객체와 관련돈 단축 구문을 적용할 시 코드가 조금이나마 간결한 효과를 볼 수 있다.

ex)

export type Person = {name: string, age: number}

export const makePerson = (name: string, age: number = 10): Person => {
    const person = {name, age}
    return person
}

console.log(makePerson('Jack'))     // {name: 'Jack', age: 10}
console.log(makePerson('Jane, 33')) // {name: 'Jane', age: 33}


3. 객체를 반환하는 화살표 함수 만들기

화살표 함수에서 객체를 반환하고자 할 때는 컴파일러가 중괄호{}를 객체가 아닌 복합 실행문으로 해석하기 때문에
컴파일러가 {}를 객체로 해석할 수 있게 소괄호()로 감싸주어야한다.

ex)

export const makePerson = (name:string, age: number = 10): Person => {name,age} // 복합 실행문

export const makePerson = (name:string, age: number = 10): Person => ({name,age}) // 객체


ex)

export type Person = {name: string, age: number}

export const makePerson = (name:string, age: number = 10): Person => ({name,age})
console.log(makePerson('Jack'))     // {name: 'Jack', age: 10}
console.log(makePerson('Jane, 33')) // {name: 'Jane', age: 33}