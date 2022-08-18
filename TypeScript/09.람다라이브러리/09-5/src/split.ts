// R.split : 구분자를 사용해 문자열을 배열로 바꿈
// R.join : 문자열 배열을 문자열로 바꿈
import * as R from 'ramda';

const words: string[] = R.split(' ')(`Hello wolrd!, I'm Peter.`);
console.log(words); // ['Hello', 'world!,', 'I'm', 'Peter.']
