let n = 12345;

let m = n
  .toString() // 문자열로 변환
  .split("") // 한글자씩 나눔
  .reverse() // 뒤집는다.
  .map((a) => (a = parseInt(a))); // map을 통하여 하나하나 요소를 숫자로 변환

console.log(m);
