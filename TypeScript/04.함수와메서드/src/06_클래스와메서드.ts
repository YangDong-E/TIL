1. function 함수와 this 키워드
타입스크립트의 function키워드로 만든 함수는 Function이란 클래스의 인스턴스이며, 함수는 객체이다.
객체 지향 언어에서 인스턴스는 this 키워드를 사용할 수 있는데 타입스크립트에서는 function 키워드로 만든 함수에 this 키워드를 사용할 수 있지만,
화살표 함수에는 this 키워드를 사용할 수 없다.


2. 메서드란?
타입스크립트에서 메서드는 function으로 만든 함수 표현식을 담고 있는 속성이다.

ex)

export class A {
    value: number =1    // value 속성
    method: () => void = function(): void {
        console.log(`value: ${this.value}`) // method 속성
    }
}


ex)

import {A} from './A'
let a: A = new A
a.method()  // value: 1
// A 클래스에서 value 속성을 1로 설정하여 this.value가 1이되어 1이 출력이 된다.


3. 클래스 메서드 구문
위 A 클래스 코드는 구현하기도 번거롭고 가독성도 매우 떨어진다.
그래서 필요한건 타입스크립트 클래스 속성 중 함수 표현식을 담는 속성은 function 키워드를 생략할 수 있게 하는 단축구문을 제공한다.
그것을 활용하여 작성을 하게 되면 아래 코드와 같이 작성할 수 있다.

ex)

export class B {
    constructor(public value: number = 1){}
    method(): void {
        console.log(`value: ${this.value}`)
    }
}

ex)
import {B} from './B'
let b: B = new B(2) // value의 설정 값을 2로 지정
b.method()  // value: 2


4. 정적 메서드
클래스의 속성은 static 수정자를 속성 앞에 붙여서 정적으로 만들 수 있는데, 메서드 또한 속성ㅇ므로 이름 앞에 static 수정자를 붙여서 정적 메서드로 만들 수 있다.

클래스 메서드 호출 형태
ex)
클래스 이름.정적 메서드()


ex)

export class C {
    static whoAreYou(): string {
        return `I'm class C`
    }
}

export class D {
    static whoAreYou(): string {
        return `I'm class D`
    }
}

// 결과 값은 같은 메서드 이름이더라도 static을 사용하여 정적 메서드로 만들었기 때문에, 클래스 이름에 따라 사용이 가능하다.
console.log(C.whoAreYou())  // I'm class C
console.log(D.whoAreYou())  // I'm Class D


5. 메서드 체인
JQuery와 같은 라이브러리는 객체의 메서드를 이어서 계속 호출하는 방식의 코드를 작성할 수 있는데, 이 방식을 메서드 체인이라고 한다.
또한, 타입스크립트로 메서드 체인을 구현하려면 메서드가 항상 this를 반환하게 한다.

ex)
$("#p1").css("color","red").slideUp(2000).slideDown(2000);


ex)

export class calculator {
    constructor(public value: number = 0) {}
    add(value: number){
        this.value += value
        return this
    }
    muliply(value: number){
        this.value *= value
        return this
    }
}

ex)

import {Calculator} from './method-chain'

let calc = new Calculator
let result = calc.add(1).add(2).muliply(3).muliply(4).value

console.log(result) //(0+1+2) * 3 * 4 = 36