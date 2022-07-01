
1. 타입스크립트 기본 제공 타입

[자바스크립트의 타입]

숫자 타입 - Number
불리언 타입 - Boolean
문자열 타입 - String
객체 타입 - Object



[타입 스크립트의 타입]

숫자 타입 - number
불리언 타입 - boolean
문자열 타입 - string
객체 타입 - object



2. let 과 const 키워드

변수 선언문에는 var let const 세가지가 있지만, var는 다른 프로그래밍 언어와 다르게 동작하기 때문에
ESNext에서는 var 키워드를 사용하지말라고 권고 하고 있다.



[let 선언문]

let으로 선언한 변수는 코드에서 그 값이 수시로 변경될 수 있음을 암시한다.


let 변수 이름 [= 초깃값]


[const 선언문]

const로 변수를 선언할 때는 반드시 초깃값을 명시해야하고, 코드에서 변숫값이 절대 변하지 않는다는 것을 암시한다.


const 변수 이름 = 초깃값




3. 타입 주석

타입 스크립트는 자바스크립트 변수 선언문을 확장해 타입을 명시할 수 있는데, 이를 타입주석이라고 한다.
하지만 let으로 선언한 변숫값은 명시된 타입과 같은 타입에 해당하는 값으로만 바꿀 수있으며 다른 타입값으로 바꾸려고 시도를 하면 오류가 발생한다.

let 변수 이름: 타입 [=초깃값]
const 변수 이름: 타입 = 초깃값


ex)
1 - let n: number = 1
2 - let b: boolean = true // 혹은 false
3 - let s: string = 'hello'
4 - let o: object = {}



4. 타입 추론
타입스크립트는 자바스크립트와 호환성을 위해 타입 주석 부분을 생략할 수 있다.
타입스크립트 컴파일러는 대입 연산자 '=' 오른쪽 값에 따라 변수의 타입을 지정하는데, 이를 타입추론이라고 한다.

ex)
1 - let n = 1       // n의 타입을 number로 판단
2 - let b = true    // b의 타입을 boolean으로 판단
3 - let s = 'hello' // s의 타입을 string으로 판단
4 - let o = {}      // o 의타입을 object로 판단



5. any 타입
타입스크립트는 자바스크립트와 호환을 위해 any라는 이름의 타입을 제공한다.
변수의 타입이 any이면 값의 타입과 무관하게 어떤 종류의 값도 저장할 수 있다.

ex)
1 - let a: any = 0
    a = 'hello'
    a = true
    a = {}




6. undefined 타입
자바스크립트에서 undefined는 값이고, 변수를 초기화하지 않으면 해당 변수는 undefined값을 가진다.
하지만 타입스크립트에서는 undefined는 타입이기도 하고 값이기도 한다.

ex)
1 - let u: undefined = undefined
    u = 1 // 오류 발생

위 코드를 작성하면 오류가 발생하는데 그 이유는 처음 행에 undefined로 타입을 선언하였기 때문에 오직 undefined값만 가질 수 있다. 
또한 undefine는 타입 계층도에서 최하위 타입이지만 1은 number 타입의 상위 타입이기 때문에 에러가 발생한다.




7. 템플릿 문자열
타입스크립트에는 변수에 담긴 값을 조합해 문자열을 만들 수 있게 하는 템플릿 문자열을 제공한다.
이 구문은 `` 를 사용하여 문자열을 감싸고, 변수를 ${} 기호로 감싸는 형태로 만들 수 있다.

ex)
1 - let count = 10, message = 'Your count'
    let result = `${message} is ${count}`
    console.log(result) // Your count is 10