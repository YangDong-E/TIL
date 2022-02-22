let n = 121;
let answer = 0;
let m = Math.sqrt(n);

// 처음 생각한 내 코드 - 답은 정확하게 나오지만 몇몇의 테스트 케이스에서는 통과가 되지않았다.

// if (m * m === n) {
//   console.log((m + 1) * (m + 1));
// } else if (m * m !== n) {
//   console.log(-1);
// }

// 구글링을 통해서 알게된 사실 - 정수인지 판단할 수 있는 부분이 없어서 답은 나오지만 특이한 경우 틀린 답이 나온다.

if (m % 1 === 0) console.log((m + 1) * (m + 1));
// 정수를 판별하는 방법은 Number.inInteager() 함수를 사용하는 방법과
// 나머지 연산자를 이용하여 정수는 1로 나누었을 경우 항상 나머지가 0이되는 속성을 이용하는방법이 있다.
else console.log(-1);
