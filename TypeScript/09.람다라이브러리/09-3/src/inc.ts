// 선언형 프로그래밍
import * as R from 'ramda';

const numbers: number[] = R.range(1, 9 + 1);

// R.pipe안에서는 console.log()문을 사용할수 없으므로 반드시 R.tap 함수를 사용해야한다.
const incNumbers = R.pipe(
    R.tap((a) => console.log('before inc:', a)), // R.tap 디버깅 함수를 사용해 7해을 실행ㅇ하기 전과 후에 배열의 아이템값을 출력
    R.map(R.inc),
    R.tap((a) => console.log('after inc:', a)),
);

// 람다 라이브러리로 어떤 로직을 구혈할 때 이런 방식으로 디버깅을 진행
const newNumbers = incNumbers(numbers);
// console.log(newNumbers)
