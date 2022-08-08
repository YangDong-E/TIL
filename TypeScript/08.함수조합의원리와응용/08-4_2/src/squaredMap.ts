import { map } from './map';

const square = (value: any) => value * value;
export const squaredMap = map(square); // 5행의 코드 처럼 a를 지정하지 않는다. - 포인트가 없는 함수
// export const squaredMap = a => map(square)(a) - 포인트가 있는 함수
