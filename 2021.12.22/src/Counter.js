import React, { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    //     상태값 , 상태 함수       기본값

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    );
};

export default Counter;
