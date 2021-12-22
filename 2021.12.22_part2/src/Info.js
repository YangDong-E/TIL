import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

//인풋이 여러개일때 useState를 여러번 사용할수있지만, useReducer를 사용하면 코드를 줄일수있다.
//useReducer에서의 액션은 어떤값도 사용이 가능하다. 이 코드에서는 e.target 자체를 액션 값으로 사용했다.

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
    });
    const { name, nickname } = state;
    const onChange = (e) => {
        dispatch(e.target);
    };
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                {/* input태그에 name 값을 할당하고 e.target.name을 참조하여 setState를 해준다. */}
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
