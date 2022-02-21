let n = 1235125;

let m = parseInt(
  // 문자열을 숫자로 변환하는 방법
  n
    .toString() // 숫자를 문자열로 바꿈
    .split("") // 글자를 하나하나 나눔
    .sort((a, b) => b - a) // 내림차순으로 변경
    .join("") // 다시 붙임
);

console.log(m);
