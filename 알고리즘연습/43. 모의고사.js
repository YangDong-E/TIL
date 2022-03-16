// 완전탐색방법을 사용하는 문제라서 구글링을 통하여 filter를 사용하는 방법을 배워서 사용해보았다.
var answers = [1, 3, 2, 4, 2];
let answer = [];

// 수포자들의 찍는 방식
let a1 = [1, 2, 3, 4, 5];
let b2 = [2, 1, 2, 3, 2, 4, 2, 5];
let c3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

// filter를 사용하여 answers를 탐색하면서 수포자들의 번호와 비교(완전 탐색)
// 인덱스 자리에 i%5 이렇게 넣는것은 구글링을 더 해봐야할것같다..
// 내 생각에는 저 수만큼 반복하는것같다
let s1 = answers.filter((a, i) => a === a1[i % 5]).length;
let s2 = answers.filter((a, i) => a === b2[i % 8]).length;
let s3 = answers.filter((a, i) => a === c3[i % 10]).length;

// 수포자들의 점수 중 최대값
let max = Math.max(s1, s2, s3);

// 최대값과 점수가 같으면 answer에 저장
if (s1 === max) answer.push(1);
if (s2 === max) answer.push(2);
if (s3 === max) answer.push(3);

// 여러명일경우 오름차순으로 정렬
console.log(answer.sort((a, b) => a - b));
