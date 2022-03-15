// 문제를 이해하는데에 시간이 너무 소비됐지만, 이해를 하고보니 그냥 중복된숫자는 하나로만 생각하고 구하면되는 문제였던것 같다.
var nums = [3, 1, 2, 3];
var answer = [];

// 총 가질 수 있는 마리 수
var type = nums.length / 2;

// 배열을 반복문을 통해 하나하나 비교
for (let i = 0; i < nums.length; i++) {
  // 배열의 길이가 총 마리 수보다 작으면
  if (answer.length < type) {
    // includes를 사용하여 특정요소가 배열에 있는지 확인 !를 사용하여 없을경우(false)일때
    if (!answer.includes(nums[i])) {
      // 배열에 추가
      answer.push(nums[i]);
    }
  }
}
// 고르는 방법 수
console.log(answer.length);
