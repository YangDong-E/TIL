let N = 123;

let m = N.toString() // 문자열로 변환
  .split("") // 한글자씩 나눔
  .map((a) => (a = parseInt(a))); // 요소 하나하나를 숫자로 변환

let b = 0; // 출력할 수

for (let i = 0; i < m.length; i++) {
  b += m[i]; // 반복문을 사용하여 배열내 요소들을 하나씩 더한다.
}

console.log(m);
console.log(b);
