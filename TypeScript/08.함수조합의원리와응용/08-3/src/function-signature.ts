export type FirstOrderFunc<T, R> = (T) => R; // 1차 함수
export type SecondOrderFunc<T, R> = (T) => FirstOrderFunc<T, R>; // 2차 고차 함수
export type ThirdOrderFunc<T, R> = (T) => SecondOrderFunc<T, R>; // 3차 고차 함수
