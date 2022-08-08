// 배열의 reduce 함수를 2차 고차 함수 형태로 재구성
export const reduce = (f: any, initValue: any) => (a: any) =>
    a.reduce(f, initValue);

// 제네릭 함수 형태의 reduce
// export const reduce = <T>(f: (sum: T, value: T) => T, initValue: T) => (a: T[]): T => a.reduce(f, initValue)
