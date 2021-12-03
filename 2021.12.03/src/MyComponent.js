import React from "react";

const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

// props값을 따로 지정하지않았을때 보여 줄 기본값 설정 - defaultProps
// MyComponent.defaultProps = {
//   name: "기본 이름",
// };
export default MyComponent; // 이 코드는 다른파일에서 이 파일을 import 할때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정한다.
