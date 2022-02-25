let s = "Zbcdefg";

// 과정
let answer1 = s.split(""); //문자열을 한글자씩 나눈다.
let answer2 = answer1.sort(); // sort로 순서대로 나열한다.
let answer3 = answer2.reverse(); // 대문자가 뒤로 가야하기때문에 반전
let answer4 = answer3.join(""); // 반전된 요소들을 문자열로 합쳐준다.

// 최종 답
let answer = s.split("").sort().reverse().join("");

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);

console.log(answer);
