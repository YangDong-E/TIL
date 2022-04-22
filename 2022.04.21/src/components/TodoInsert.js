import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

// onInsert를 props로 받아온다.
const TodoInsert = ({ onInsert }) => {
    // useState를 사용하여 상태관리를 한다.
    const [value, setValue] = useState('');

    // useCallback을 사용하여 한번 함수를 만들고 재사용할 수 있게 하였다.
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue(''); // value 값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
            // 이를 방지하기 위해 이 함수를 호출합니다.
            e.preventDefault();
        },
        [onInsert, value]
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            {/* placeholder를 사용하여 input안에 글씨를 넣어주었다. */}
            {/* value를 통해 value에 대한 상태관리를 담당 */}
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
