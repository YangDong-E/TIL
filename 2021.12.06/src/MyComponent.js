import React from "react";

const MyComponent = (props) => {
    //(props) 자리에 ({name, children})으로 바꿔서 사용도 가능
    const { name, children } = props; // 비구조화 할당 문법을 통한 props 내부 값 추출
    return (
        <div>
            안녕하세요, 제이름은 {name}입니다.
            <br />
            children 값은 {children}
            입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: "기본이름",
};

export default MyComponent;
