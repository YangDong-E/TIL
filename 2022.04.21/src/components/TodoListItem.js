import React from 'react';
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

// todo, onRemove, onToggle을 props로 받는다.
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    // todo안에 값 중 id, text, checked 값을 사용한다.
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                {/* 조건부 스타일링을 위해 classnames(cs)를 사용한다. */}
                <div
                    className={cn('checkbox', { checked })}
                    // 클릭을 했을 시 onToggle이 id값에 따라 실행한다.
                    onClick={() => onToggle(id)}
                >
                    {/* 삼항 연사자를 사용하여 checked의 true false 값에 따라 아이콘에 변화를 준다. */}
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    {/* todo 데이터에서 text값을 출력한다. */}
                    <div className="text">{text}</div>
                </div>
                {/* 클릭을 했을 시 onRemove가 id값에 따라 실행한다. */}
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
};

// React.memo를 사용하여 컴포넌트 성능 최적화
export default React.memo(TodoListItem);
