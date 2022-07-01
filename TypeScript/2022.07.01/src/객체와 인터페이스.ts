타입스크립트의 타입 계층도에서 object 타입은 인터페이스와 클래스의 상위 타입이다.
object 타입으로 선언된 변수는 number, boolean, string 타입의 값을 가질 수는 없지만, 속성 이름이 다른 객체를 모두 자유롭게 담을 수 있다.

ex)
1 - let o: object = {name: 'Jack', age: 32}
    o = {first: 1, second: 2}

이 코드에서는 object 타입은 객체를 대상으로 하는 any타입으로 동작하며 타입스크립트의 인터페이스 구문은 이렇게 동작하지 않게 하려는 목적으로 고안되었다.
즉, 변수 o에는 항상 name과 age 송성으로 구성된 객체만 가질 수 있게 해서 두 번째 행의 코드는 오류가 발생하게 한다.


1. 인터페이스 선언문

타입스크립트는 객체의 타입을 정의할 수 있게하는 interface라는 키워드를 제공한다.
인터페이스의 객체의 타입을 정의하는 것이 목적이고 객체를 의미하는 {}로 속성의 이름과 타입을 나열하는 형태로 사용한다.

ex 1)
1 - interface 인터페이스 이름 {
    속성 이름[?]: 속성 타입[...]
}


ex 2)
1 - interface IPerson {
    name: string
    age: number
}

인터페이스 속성들을 여러 줄로 구현할 때는 쉼표(,) 대신 세미콜론(;)으로 구분하거나 줄바꿈으로도 가능하다.


ex 3)
1 - interface IPerson {
    name: string;
    age: number;
}
let good: IPerson = {name: 'Jack', age: 32}

let bad1: IPerson = {name: 'Jack'}  // age 속성이 없으므로 오류
let bad2: IPerson = {age: 32}       // name 속성이 없으므로 오류
let bad3: IPerson = {}              // name과 age속성이 없으므로 오류
let bad4: IPerson = {name: 'Jack', age: 32, etc: true} // etc 속성이 있어서 오류


2. 선택 속성 구문

ex 1)
1 - interface IPerson2 {
    name: string // 필수 속성
    age: number // 필수 속성
    etc?: boolean // 선택 속성
}

let good1: IPerson2 = {name: 'Jack', age: 32}
let good2: IPerson2 = {name: 'Jack', age: 32, etc: true}

인터페이스를 설계를 할 때 어떤 속성은 반드시 있어야 하지만, 어떤 속성은 있어도 되고 없어도 되는 형태를 만들 때가 있는데,
이러한 속성을 선택 속성이라 하며 속성 이름 뒤에 물음표 기호를 붙여서 만들며 사용한다.




3. 익명 인터페이스
타입스크립트는 interface 키워드도 사용하지 않고 인터페이스의 이름도 없는 인터페이스를 만들 수 있다.
이를 익명 인터페이스라고 한다.

ex 1)
1 - let ai: {
    name: string
    age: number
    etc?: boolean
} = {name: 'Jack', age: 32}


ex 2) 함수구현
function printMe(me: {name: string, age: number, etc?:boolean}){
    console.log(
        me.etc?
        `${me.name} ${me.age} ${me.etc}` :
        `${me.name} ${me.age}`
    )
}
printMe(ai) // Jack 32


