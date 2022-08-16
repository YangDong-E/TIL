// R.addIndex 함수
import * as R from 'ramda';

const addIndex = R.pipe(
    R.addIndex(R.map)(R.add),
    // R.addIndex(R.map)((value: number, index: number) => R.add(value)(index)),
    R.tap((a) => console.log(a)), // [1, 3, 5, 7, 9, 11, 13, 15, 17]
);
// @ts-ignore
// @ts-ignore를 사용하여 아래 행을 타입스크립트 컴파일 하지 않게 한다.
const newNumbers = addIndex(R.range(1, 9 + 1));
