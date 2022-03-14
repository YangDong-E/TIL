// 금액 총액수
var result = 0;
// 부서 수
var answer = 0;
// 각 부서들의 신청 한 금액
var d = [1, 3, 2, 5, 4];
// 예산
var budget = 9;
// 가장 많은 부서를 구해야 하기 때문에 오름차순으로 작은것부터 더하기 위해 정렬
var arr = d.sort((a, b) => a - b);

// 정렬한 배열 길이만큼 반복
for (let i = 0; i < arr.length; i++) {
  // 인덱스 별로 하나하나 더한다.
  result += arr[i];
  // 부서수 +1
  answer += 1;
  // 만약 예산보다 총액수가 넘어가면
  if (result > budget) {
    // 1을 차감한다.
    answer -= 1;
  }
}

// 모든 배열의 길이를 돈 뒤 나온 부서 수
console.log(answer);
