// Array 클래스의 every 인스턴스 메서드
const isAllTrue = (values: boolean[]) => values.every((value) => value == true);

console.log(
    isAllTrue([true, true, true]), // true
    isAllTrue([false, true, true]), // false
);
