let a = 5;
let b = 24;

let result = new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
// new Date()를 사용하여 타임스탬프를 가져온다.
// 첫번째 매개변수는 year 연도
// 두번째 매개변수는 월이 아닌 월의 인덱스 번호이다. (1월은 0, 2월 1 ...)
// 세번째 매개변수는 일수 이다.
// 그후 문자열로 변경후 요일은 앞에 나오기때문에 3글자만 자른 뒤 대문자로 변형

console.log(result);
