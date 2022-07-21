1. 반복기란?

-   next라는 이름의 메서드를 제공
-   next메서드는 value 와 done이라는 두 개의 속성을 가진 객체를 반환한다.

2. createRangeIterable 함수

next 메서드가 있는 객체를 반환하기 때문에 반복기를 제공하는 역할을 한다.

반복기를 제공하는 역할을 하는 함수를 '반복기 제공자'라고 한다.

3. Iterable <T> 와 Iterator<T> 인터페이스

Iterable<T> : 자신을 구현하는 클래스가 [Symbol.iterator]메서드를 제공한다는 것을 명확하게 알려주는 역할

Iterator<T> : 반복기가 생성할 값의 타입을 명확하게 해주는 역할
