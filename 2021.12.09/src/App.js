import React, { Component } from "react";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
class App extends Component {
    render() {
        // return <ValidationSample />;
        return (
            <div>
                <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    {/* 문법상으로는 onClick={this.scrollBox.scrollToBottom} 같은 형식으로 해도 되지만 컴포넌트가 처음 렌더링 될때는 this.scrollBox 값이 undefined 이므로 this.scrollBox.scrollToBottom 값을 받아올때 오류가 발생하기때문에
                화살표 함수를 사용하여 새로운 함수를 만들고 내부에서 메서드를 실행하면 버튼을 누를때 값을 읽어와서 실행하므로 오류가 발생하지 않는다. */}
                    맨밑으로
                </button>
            </div>
        );
    }
}

export default App;
