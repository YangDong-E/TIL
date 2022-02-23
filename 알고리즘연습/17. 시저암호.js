// 고민 끝에 구글링을 통하여 문제를 해결 하였다.
// 구성은 어느정도 되었지만 includes와 indexOf 함수를 생각하지 못하여 해결을 하지 못했다.

let s = "a B z ";
let n = 4;
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let answer = "";

for (let i = 0; i < s.length; i++) {
  let str = s[i];
  // 단어가 공백일경우 공백으로 추가
  if (str === " ") {
    answer += " ";
    continue;
  }
  // includes 함수를 사용하여 대문자 소문자 구분 + 단어가 있는지 체크 있으면 true(upper) 없으면 false(lower)
  let upperOrLower = upper.includes(str) ? upper : lower;
  // 문자열에 매개변수 s의 인덱스에 매개변수 n만큼의 수를 더한다.
  let index = upperOrLower.indexOf(str) + n;
  // 만약 인덱스가 문자열의 길이보다 길거나 같으면 인덱스 - 문자열의 길이를 뺀다.
  if (index >= upperOrLower.length) {
    index -= upperOrLower.length;
  }
  // 문자열에 추가
  answer += upperOrLower[index];
}

console.log(answer);

// 두번째 방법으로는 아스키코드를 사용하는방법이 있다고 찾았다.

// let a = s
//   .split("")
//   .map((e) => {
//     if (" " == e) {
//       return e;
//     }
//     return e.toUpperCase().charCodeAt(0) + n > 90 // charCodeAt() - 문자열중 하나를 아스키 코드로 변환 해주는 함수
//       ? String.fromCharCode(e.charCodeAt(0) + n - 26) // fromCharCode() 아스키 코드번호를 받아 문자열로 변환 해주는 함수
//       : String.fromCharCode(e.charCodeAt(0) + n);
//   })
//   .join("");

// console.log(a);
