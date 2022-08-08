import { reduce } from './reduce';
const sum = (result: any, value: any) => result + value;

export const sumArray = reduce(sum, 0); // 포인트가 없는 함수 형태
