자바스크립트에서 함수는 function으로 만드는 함수와 => 기호로 만드는 화살표 함수가 있다.

타입스크립트 함수 선언문은 자바스크립트 함수 선언문에서 매개변수와 함수 반환값에 타입 주석을 붙이는 형태로 구성이 된다.

ex 1)

function 함수 이름(매개변수1: 타입1, 매개변수2: 타입2[, ...]): 반환값 타입 {
    함수 몸통
}

ex 2)

function add(a: number, b:number): number {  // a,b는 함수 선언문에서 함수 이름 뒤 괄호 안에서 선언하는 매개변수이다.
    return a + b
}


let result = add(1,2) // 함수를 호출할 때 전달하는 값인 인수이다.




1. 매개변수와 반환 값의 타입 주석 생략

변수처럼 함수 선언문에서도 매개변수와 반환값에 대한 타입 주석을 생략할 수 있다.
하지만 변수와 달리 이 부분에서 타입을 생략이 되면, 함수의 구현 의도를 알기 어렵고 잘못 사용하기 쉽기 때문에 바람직하지 않다.


2. void 타입

void 타입은 값을 반환하지 않는 함수의 반환 타입이다.
그러므로 void 타입은 함수 반환 타입으로만 사용이 가능하다.


ex 1)

function printMe(name: string, age: number): void{
    console.log(`name: ${name}, age: ${age}`)
}


3. 함수 시그니처

변수에 타입이 있듯이 함수에도 타입이 있다.
이것을 함수 시그니처라고 한다.

ex 1)

(매개변수 1 타입, 매개변수 2 타입[, ...]) => 반환값 타입


ex 2)

function printMe(name: string, age: number): void{
    console.log(`name: ${name}, age: ${age}`)
}

이 함수의 함수 시그니처는 (string, number) => void 이다.

let printMe: (string, number) => void = function (name:string, age: number): void {}

만약, 매개변수가 없다면 ()로만 표현을 하고 () => void는 매개변수도 없고 반환값도 없는 함수 시그니처이다.


4. type 키워드로 타입 별칭 만들기

타입스크립트에는 type이라는 키워드가 있는데 기존에 존재하는 타입을 단순히 이름만 바꿔서 사용할 수 있게한다.
이러한 기능을 타입 별칭이라고 한다.

ex 1)

type 새로운 타입 = 기존 타입

ex 2)

type stringNumberFunc = (string, number) => void

let f: stringNumberFunc = function(a:string, b: number): void {}
let g: stringNumberFunc = function(c: string, d: number): void {}

함수 시그니처를 명시하여 매개변수의 개수와 타입, 반환 타입이 다른 함수를 선언하는 것을 방지할 수 있다.


5. 선택적 매개변수

인터페이스의 선택 속성과 마찬가지로 함수의 매개변수에도 물음표를 붙일 수 있으며 이를 선택적 매개변수라고 한다.

ex 1)

function fn(arg1: string, arg?:number): void {}


ex 2)

function fn(arg1: string, arg?:number) {console.log(`arg: ${arg}`)}

fn('hello', 1) // arg:1
fn('hello')    // arg: undefined

선택적 매개변수는 위 코드의 두 가지 fn 함수 호출을 모두 가능하게 하고싶을 때 사용한다.
s
선택적 매개변수가 있는 함수의 시그니처는 마찬가지로 뒤에 물음표를 붙이면 된다.

ex)

type OptionalArgFunc = (string, number?) => void



