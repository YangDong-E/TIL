let s = "pPoooyY";

let answer;

let p = s.toUpperCase().split("P").length - 1; //모든 문자열을 대문자로 통일한 뒤 P의 개수만큼 빼고 길이에서 P가 아닌 1개의 요소를 뺀다.
let y = s.toUpperCase().split("Y").length - 1; //모든 문자열을 대문자로 통일한 뒤 Y의 개수만큼 빼고 길이에서 Y가 아닌 1개의 요소를 뺀다.

if (p === y) {
  // 조건문을 통해 길이가 같으면 true
  answer = true;
} else {
  // 다르면 false를 리턴
  answer = false;
}

console.log(p);
console.log(y);

console.log(answer);
