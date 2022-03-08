let numbers = [2, 1, 3, 4, 1];
let arr = [];

for (let i = 0; i < numbers.length; i++) {
  // 반복문을 통하여 앞요소와 뒤의 요소를 배열의 길이만큼 반복
  for (let j = i + 1; j < numbers.length; j++) {
    arr.push(numbers[i] + numbers[j]); // 배열에 앞 뒤요소를 더한 값을 추가
  }
}

//https://blogpack.tistory.com/1068 배열의 중복요소 제거 참고
const result = [...new Set(arr)]; // 더한값을 추가할때 중복요소도 포함이 되어있기때문에 Set을 사용하여 중복이 없는 셋 객체를 반환한다.
result.sort((a, b) => a - b); // 그 요소를 오름차순으로 정렬

console.log(result);
