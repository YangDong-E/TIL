인터페이스나 클래스를 사용해 관련된 정보를 묶어 새로운 타입으로 표현하는 것을 구조화라고 한다.


1. 비구조화
구조화된 데이터는 어떤 시점에서는 데이터의 일부만 사용해야 할 때가 있는데, 아래 코드처럼 jack.name, jack.age 부분을 name과 age 변수에 저장하는 방법
즉, 구조화된 데이터를 분해하는 것을 비구조화라고 한다.

ex)
let name = jack.name, age = jack.age



2. 비구조화 할당
비구조화 할당은 ESNext 자바스크립트의 구문으로 타입스크립트에서 사용할 수 있다.
또한 객체와 배열, 튜플에서도 적용할 수 있고 비구조화 할당을 객체 적용하려면 얻고 싶은 속성을 중괄호로 묶으면 된다.

ex)
let {name, age} = jack



3. 잔여 연산자
ESNext 자바스크립트와 타입스크립트는 점을 연이어 3개 사용하는 ... 연산자를 제공한다.
이 연산자는 사용되는 위치에 따라 잔여 연산자 또는 전개 연산자라고 불린다.

ex)
let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong',
    address: '789 street'
}

const {country, city, ...detail} = address
console.log(detail) // {address1: 'Gangnam-gu',address2: 'Sinsa-dong',address: '789 street'}

detail 변수에 ...를 사용하여 country와 city를 제외한 나머지 속성이 담겨있다.


4. 전개 연산자
... 연산자가 비구조화 할당문이 아닌 곳에서 사용될 때 전개 연산자라고 부르며, 말 그대로 객체의 속성을 모두 전개 하여 새로운 객체를 만드는 것을 의미한다.

ex)
let part1 = {name: 'jane'}, part2 = {age:22}, part3 = {city:'Seoul', country: 'Kr'};
let merged = {...part1, ...part2, ...part3}
console.log(merged) // {name: 'jane',age:22,city:'Seoul', country: 'Kr' }