import React, { Component } from "react";

class EventPractice extends Component {
    state = {
        //state에 input 값 담기
        message: "",
    };
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message} //state에 input(value)값 담기
                    onChange={(e) => {
                        // console.log(e.target.value); -> 값이 바뀔때마다 바뀌는 값을 콘솔에 기록
                        // console.log(e);
                        this.setState({
                            message: e.target.value,
                        });
                        console.log(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        alert(this.state.message); //알림창
                        this.setState({
                            message: "",
                        });
                    }}
                >
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice;
