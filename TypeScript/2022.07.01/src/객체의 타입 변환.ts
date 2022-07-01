1. 타입 변화
타입이 있는 언어들은 특정 타입의 변숫값을 다른 타입의 값으로 변호나할 수 있는 기능을 제공한다. 
이를 타입변환 이라고 한다.

ex 1)
let person: object = {name: 'Jack', age: 32};
person.name // error

ex 2)
let person: object = {name: 'Jack', age: 32};
(<{name: string}>person).name // person변수를 일시적으로 name속성이 있는 타입 {name:string} 타입으로 변환해 person.name속성값을 얻게 하였다.


2. 타입 단언
타입 스크립트는 독특하게 타입 변환이 아닌 타입 단언이라는 용어를 사용하는데, 두 가지의 단언문이 있다.

ex 1)
(<타입>객체)
(객체 as 타입)


두 형태 모두 ES5 자바스크립트 구문이 아니기 때문에 두 구문을 구분하기 위해 타입 단언이라는 용어를 사용한다.


ex 2)
export default interface INameable {
    name: string
}


ex 2-1)
import INameable from './INameable'
let obj = {name: 'Jack'}

let name1 = (<INameable>obj).name // Jack
let name2 = (obj as INameable).name // Jack