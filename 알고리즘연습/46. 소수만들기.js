var nums = [1, 2, 3, 4];
let answer = 0;

// 반복문을 통하여 배열의 모든 요소들을 3개씩 더하는 경우의 수를 구한다.
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      let sum = nums[i] + nums[j] + nums[k];
      // 만약 isPrime이라는 함수를 통과하면
      if (isPrime(sum)) {
        // answer 결과값에 1을 추가
        answer++;
      }
    }
  }
}

// isPrime이라는 함수는 소수를 구하는 함수이다.
// 소수 구하는 함수는 구글링을 통해 스택오버플로우에서 공부를하면서 사용하였다.
function isPrime(sum) {
  //i 가 소수를 구하는 공식이기때문에 2부터 시작하고 sum미만으로 한 이유는 sum과 i가 같은수 일경우 true 이기 때문이다.
  for (let i = 2; i < sum; i++) {
    // sum이 i로 나눠지면 소수가 아니기때문에 false;
    if (sum % i === 0) {
      return false;
    }
  }
  // sum이 1보다 커야하기때문에 true가 되기위해서 sum>1을 해주었다.
  return sum > 1;
}

console.log(answer);
