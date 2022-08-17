// 배열에서 3 <= x < 7 범위에 있는 수만 선택하는 로직
import * as R from 'ramda';

R.pipe(
    R.filter(R.lte(3)),
    R.filter(R.gt(6 + 1)),
    R.tap((n) => console.log(n)), // [3,4,5,6]
)(R.range(1, 10 + 1));
