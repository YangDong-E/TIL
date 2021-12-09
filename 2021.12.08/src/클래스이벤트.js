import React, { Component } from "react";

class EventPractice extends Component {
    state = {
        username: "",
        message: "",
    };

    //임의의 메소드 만들기
    // constructor(props) {
    //     super(props);
    //this는  호출부에 따라 결정되므로 클래스의 임의 메서드가 특정HTML요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져버리므로,
    //임의의 이베트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서 바인딩 하는작업을 해야하는데 constructor에서 작업이 이루어진다.
    //바인딩을 하지 않을 경우 this가 undefined를 가리키게 된다.
    // 새 메서드를 만들때마다 construcotr를 수정해야하는데 이것을 간단하게 하기위해선 화살표 함수형태로 메서드를 정의하는것이다.
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, //객체안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용된다.
        });
    };

    handleClick = (e) => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: "",
            message: "",
        });
    };

    handleKeyPress = (e) => {   //Enter를 눌렀을때 실행되는 함수
        if (e.key === "Enter") {
            this.handleClick();
        }
    };
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                {/* input여러개 다루기 */}
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}    //키가 눌렸을때 반응해야하는 메서드
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
