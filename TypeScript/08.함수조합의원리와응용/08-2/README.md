# 제네릭 함수

1. 제네릭 타입

   - number[], boolean[], string[]과 같은 배열을 T[]로 표현할 수 있다.
   - number[]에서 number와 같은 타입을 타입 변수 T로 표기할 때 이것을 제네릭 타입이라고 한다.
   - 타입스크립트의 함수는 매개변수와 반환값에 타입이 존재하므로, 함수 조합을 구현할 때는 제네릭 함수 구문을 사용해야만 한다.

2. 타입스크립트의 제네릭 함수 구문

   - 타입스크립트에서 제네릭 타입은 함수와 인터페이스, 클래스, 타입 별칭에 적용할 수 있다.
   - 그 방법으로는 <>로 타입을 감싼 <T>, <T,Q>처럼 표현을 한다.
   - 제네릭 타입으로 함수를 정의하면 어떤 타입에도 대응할 수 있다.

   - function 키워드로 만든 함수에 제네릭 타입을 적용한 예시

   ```javascript
   function g1<T>(a: T): void {} // a 매개변수가 제네릭 타입으로 정의
   function g2<T, Q>(a: T, b: Q): void {} // a와 b 매개변수가 각각 다른 제네릭 타입으로 지정
   ```

   - 화살표 함수에 제네릭 타입을 적용한 예시

   ```javascript
   const g3 = <T>(a: T): void => {};
   const g4 = <T, Q>(a: T, b: Q): void => {};
   ```

   - 타입 별칭에 제네릭 타입을 적용한 예시

   ```javascript
   type Type1Func<T> = (T) => void;
   type Type2Func<T, Q> = (T, Q) => void;
   type Type3Func<T, Q, R> = (T, Q) => R; // 함수의 시그니처는 T 와 Q 타입 값을 입력받아 R 타입 값을 반환하는 것을 나타냄
   ```

3. 함수의 역할

   - 수학에서 함수는 값 x에 수식을 적용해 또 다른 값 y를 만드는 역할을 하는데, 함수를 f로 표기했을 때 관계식

   ```javascript
       x ~> f ~> y
   ```

   - 프로그래밍 언어로 수학의 함수를 구현할 때는 변수 x와 y의 타입을 고려해야 하는데 함수 f가 T 타입의 x 값으로 R타입의 y 값을 만들 때 관계식

   ```javascript
       (x:T) ~-> f -> (y:R)
   ```

   - 위와 같은 관계식을 수학에서는 일대일 관계라고 하고, 이런 동작을 하는 함수 f를 '맵'이라고 표현한다.

   - 타입 스크립트 언어로 일대일 맵 함수를 만든다면 타입 T인 값을 이용해 타입 R인 값을 만들어 주어야 하므로, 함수의 시그니처를 다음처럼 표현할 수 있다.

   ```javascript
   type MapFunc<T, R> = (T) => R;
   ```

4. 아이덴티티 함수

   - 맵 함수의 가장 단순한 형태는 입력값 x를 가공 없이 그대로 반환하는 것이다.
   - 즉, 입력과 출력 타입이 같다.
   - 함수형 프로그래밍에서 이러한 역할을 하는 함수 이름에는 indentity 혹은 I라는 단어가 포함이 된다.

   ```javascript
   // 아이덴티티 함수의 시그니처 표현
   type MapFunc<T, R> = (T) => R;
   type IdentityFunc<T> = MapFunc<T, T>;

   // 정의한 제네릭 함수 타입 IdentityFunc<T>를 이용한 다양한 함수 선언
   const numberIdentity: IdentityFunc<number> = (x: number): number => x;
   const stringIdentity: IdentityFunc<string> = (x: string): string => x;
   const objectIdentity: IdentityFunc<object> = (x: object): object => x;
   const arrayIdentity: IdentityFunc<any[]> = (x: any[]): any[] => x;
   ```
