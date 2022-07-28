// awiat-test.ts와 다른 결과 값

// test1() 함수 호출이 해소된 다음에 test2() 함수를 호출하기 때문에 실행 결과가 다르다.

import { test1 } from './test1';
import { test2 } from './test2';

test1().then(() => test2());
