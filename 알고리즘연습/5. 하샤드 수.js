let num = 13;   // 입력 숫자
let answer = true;    // 출력을 true로 기본값으로 설정
let S = num     // 변수 S는 
  .toString()   // 입력받은 숫자를 문자열로 변환시키고
  .split("")    // 한글자씩 나눠서 배열에 담는다.
  .map((num) => Number(num)) // 배열에 담긴 하나하나의 요소를 숫자로 변환
  .reduce((a, b) => a + b); // reduce를 사용하여 요소들을 더한다.

if (num % S === 0) {    // 입력받은 숫자와 더한 숫자를 나눴을때 나머지가 0일경우 하샤드 수로 true
  answer = true;
} else {                // 아닐경우 flase 출력
  answer = false;
}

console.log(typeof S);
console.log(answer);
