// selectRange 함수를 R.filter와 결합해 포인트 없는 함수 형태로 구현
import * as R from 'ramda';
import { selectRange } from './selectRange';

R.pipe(
    R.filter(selectRange(3, 6 + 1)),
    R.tap((n) => console.log(n)), // [3,4,5,6]
)(R.range(1, 10 + 1));
