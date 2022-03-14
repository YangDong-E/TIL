// 자연수 n 은 매개변수
var N = 45;
// n(숫자).toString(3) -> 숫자를 3진수로 변환 (문자열)
// 문자열을 뒤집기위해선 split을 통해서 쪼갠 배열에서 reverse로 뒤집은뒤 다시 join으로 붙여준다.
var answer = N.toString(3).split("").reverse().join("");
//  n진수에서 10진수(정수)로 변환을 하려면 parseInt(문자열,문자열의 진수)를 사용하여 나타낼 수 있다.
var result = parseInt(answer, 3);

console.log(result);
