import React from "react";
import App from "./App";

const MyComponent = (props) => {
    return (
        <div>
            안녕하세요, 제이름은 {props.name}입니다. <br />
            children 값은 {props.children}
            입니다.
            {/* {App.js 컴포넌트에서 MyComponent태그 사이에 작성한 리액트라는 문자열을 MyComponent 내부에서 보여주려면 props.children값으로 보여줄수있다.} */}
        </div>
    );
};

MyComponent.defaultProps = {
    name: "기본이름",
};

export default MyComponent;
