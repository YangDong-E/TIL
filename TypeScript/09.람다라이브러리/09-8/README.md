1. R.toPairs 와 R.fromPairs 함수

    - R.toPairs 함수는 객체의 속성들을 분해해 배열로 만들어 준다.
    - 이때 배열의 각 아이템은 [string, any] 타입의 튜플이다.
    - 객체의 모든 속성을 [키, 값] 형태의 배열로 만드는 함수이다.

    - R.fromPairs 함수는 [키:값]형태의 아이템을 가진 배열을 다시 객체로 만들어주는 함수이다.

2. R.keys 와 R.values 함수

    - R.keys 함수는 객체의 속성 이름만 추려서 string[] 타입 배열로 반환한다.
    - R.values 함수는 객체의 속성값만 추려서 any[] 타입 배열로 반환한다.

3. R.zipObj 함수

    ```javscript
    객체 = R.zipObj(키 배열, 값 배열)
    ```

    - R.zipObj 함수는 '키 배열(속성 이름 배열)'과 '값 배열(속성에 설정할 값 배열)'이라는 두 가지 매개변수를 결합해 객체로 만들어준다.
    - R.keys와 R.values 함수로 얻은 keys와 values 배열을 R.zipObj 함수로 결합한 객체를 비교하면 같은 속성 이름과 값을 가지고 있다.

4. R.mergeLeft 와 R.mergeRight 함수

    ```javscript
    새로운 객체 = R.mergeLeft(객체 1)(객체 2)   <- 속성값이 다를 때 왼쪽 객체의 우선순위가 높다.
    새로운 객체 = R.mergeRight(객체 1)(객체 2)  <- 속성값이 다를 때 오른쪽 객체의 우선순위가 높다.
    ```

    - R.mergeLeft 와 R.mergeRight 함수는 두 개의 객체를 입력받아 두 객체의 속성들을 결합해 새로운 객체를 생성한다.
    - 같은 속성이 있을때에만 우선순위를 갖고 속성이 다를때는 그대로 결합을 한다.

5. R.mergeDeepLeft 와 R.mergeDeepRight 함수

    - R.mergeLeft와 R.mergeRight 함수는 객체의 속성에 담긴 객체를 바꾸지는 못한다.
    - 하지만 R.mergeDeepLeft와 R.mergeDeepRight 함수는 객체의 속성이나 속성 값들도 바꿀 수 있다.
