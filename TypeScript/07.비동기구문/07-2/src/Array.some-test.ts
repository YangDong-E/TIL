// Array 클래스의 some 인스턴스 메서드
const isAnyTrue = (values: boolean[]) => values.some((value) => value == true);

console.log(
    isAnyTrue([false, true, false]), // true
    isAnyTrue([false, false, false]), // false
);
