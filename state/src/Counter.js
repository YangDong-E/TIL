import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        //constructor를 작성할때는 반드시 super(props)를 호출해야함
        super(props);

        this.state = {
            // state의 초기값 설정(객체 형식이어야 함)
            number: 0,
            fixedNumber: 0, // state 객체안에 값이 여러개 일때 예시
        };
    }
    render() {
        const { number, fixedNumber } = this.state; //state를 조회할때 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>{fixedNumber}</h2>
                <button
                    onClick={() => {
                        //onClick을 사용하여 버튼이 클릭되었을때 호출할 함수를 지정
                        this.setState({ number: number + 1 }); //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
                        //fixedNumber를 setState함수에 넣어주지않아서 숫자가 변경되지 않는다.
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
