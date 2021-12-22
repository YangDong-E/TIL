import React, { useReducer } from 'react';

function reducer(state, action) {
    //리듀서는 현재 상태, 업데이트를위해 필요한 정보를 담은 액션(action)값을 전달받아 새로운 상태를 반환하는 함수, 새로운 상태를 만들 때는 반드시 불변성을 지켜주어야함
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispath] = useReducer(reducer, { value: 0 }); //useReducer의 첫번째 파라미터는 리듀서함수를 넣고,두번째는 해당 리듀서의 기본값을 넣어준다.
    //state는 현재 가리키고 있는 상태 , dispatch는 액션을 발생시키는 함수 dispatch(action) 형태로 함수안에 파라미터로 액션 값을 넣어 주면 리듀서 함수가 호출되는 구조
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>
            </p>
            <button onClick={() => dispath({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispath({ type: 'DECREMENT' })}>-1</button>
        </div>
    );
}

export default Counter;
