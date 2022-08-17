// x가 min <= x < max 조건을 만족하는지 allPass 함수를 사용해 확인하는 코드
import * as R from 'ramda';

type NumberToBooleanFunc = (n: number) => boolean;
export const selectRange = (min: number, max: number): NumberToBooleanFunc =>
    R.allPass([R.lte(min), R.gt(max)]);
