// 클로저는 메모리가 해제되지 않고 프로그램이 끝날 때까지 지속될 수 있다.

// () => string 타입의 함수를 반환하는 2차 고차 함수
const makeNames = (): (() => string) => {
    // 바깥쪽 유효 범위
    const names = ['Jack', 'Jane', 'Smith'];
    let index = 0;
    return (): string => {
        // 안쪽 유효 범위
        if (index == names.length) index = 0;
        return names[index++];
    };
};

const makeName: () => string = makeNames();
console.log([1, 2, 3, 4, 5, 6].map((n) => makeName()));
