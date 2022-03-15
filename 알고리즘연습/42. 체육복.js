// 그리디(greedy)알고리즘은 예전에 공부할때부터 어려웠는데,
// 지금도 순서는 이해는 가지만 코드로 작성하려니 큰 어려움이 있어서 구글링을 하였다..
var n = 5;
var lost = [2, 4];
var reserve = [1, 3, 5];

// 1번 답안 (콘솔로 돌리면 정상작동하지만, 프로그래머스에서 테스트케이스 13,14번에서 에러가 발생)
// var count = n - lost.length;
// var tmp_lost = [];

// // lost와 reserve 두 개 모두 속한 애는 여벌 옷이 없다. (제한사항 5번째)
// // 따라서 reserve 배열에서 제거하고 ,count를 1 증가
// for (let i = 0; i < lost.length; i++) {
//   if (reserve.includes(lost[i])) {
//     reserve = reserve.filter((e) => e !== lost[i]);
//     count++;
//   }
//   // lost, reverse 두 개 모두 속하지 않은 애는 배열에 추가
//   else {
//     tmp_lost.push(lost[i]);
//   }
// }

// lost = tmp_lost;

// for (let i = 0; i < lost.length; i++) {
//   // 비교를 할때 왼쪽에 여벌옷이 있는애가 있으면
//   if (reserve.includes(lost[i] - 1)) {
//     reserve = reserve.filter((e) => e !== lost[i] - 1);
//     count++;
//   }
//   // 여벌옷을 가지고 있는애가 오른쪽에 있을 시
//   else if (reserve.includes(lost[i] + 1)) {
//     reserve = reserve.filter((e) => e !== lost[i] + 1);
//     count++;
//   }
// }

// console.log(count);

// 2번 답안

// 겹치는 수가 있는 인덱스는 제거 한다.
const noDupleLost = lost.filter((s) => reserve.indexOf(s) === -1);
const noDupleReserve = reserve.filter((s) => lost.indexOf(s) === -1);

// 체육복이 없는 인덱스를 정렬
noDupleLost.sort();

var answer = n - noDupleLost.length;

// noDupleLost 배열의 요소를 각각 돌리면서
noDupleLost.forEach((lostStudent) => {
  // 만약 앞번호의 학생이 여벌을 가지고있으면 빌린다.
  if (noDupleReserve.indexOf(lostStudent - 1) >= 0) {
    // 학생수를 추가
    answer++;
  }
  // 앞번호 학생이 가지고있지않고, 다음번호 학생이 가지고있으면 빌린다.
  else if (noDupleReserve.indexOf(lostStudent + 1) >= 0) {
    // 학생수 추가
    answer++;
    var reserveStudent = noDupleReserve.indexOf(lostStudent + 1);
    // 여벌옷을 가지고있던 학생을 제거
    noDupleReserve.splice(reserveStudent, 1);
  }
});
console.log(answer);
