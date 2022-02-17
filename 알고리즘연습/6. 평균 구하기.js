let arr = [1, 2, 3, 4]; // 입력받은 숫자 배열
let sum = 0;            // sum이라는 변수 설정
for (let i = 0; i < arr.length; i++) {  // 반복문을 사용하여 arr의 길이만큼 반복
  sum = sum + arr[i];                   // 요소를 모두 더한다.
  let avg = sum / arr.length;           // 평균 값을 구하기 위하여 전체 더한값을 arr의 길이로 나눈다.
  console.log(avg);
}
