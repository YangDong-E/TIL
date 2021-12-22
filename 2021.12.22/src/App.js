import React from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Counter from './Counter';
import Info from './Info';

function App() {
    const [visible, setVisible] = useState(false);
    // return <Counter />;
    return (
        <div>
            <button
                onClick={() => {
                    setVisible(!visible); //기본값을 숨기기로 해놓기
                }}
            >
                {visible ? '숨기기' : '보이기'}
                {/* 보이는것이 기본값(참)이면 숨기기, 반대면 보이기를 출력 */}
            </button>
            <hr />
            {visible && <Info />}
            {/* 값이 보이기이고 Info 컴포넌트일시 내용출력 */}
        </div>
    );
}

export default App;
