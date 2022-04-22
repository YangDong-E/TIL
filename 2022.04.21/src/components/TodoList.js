import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// todos, onRemove, onToggle을 props로 받아온다.
const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {/* props로 받아온 todos 배열을 배열 내장 함수 map을 통해 TodoListItem으로 이루어진 배열로 변환하여 렌더링한다. */}
            {/* map을 사용하여 컴포넌트로 변환할 때는 key props를 전달해 주어야 한다. 여기서 사용되는 key 값은 고윳값인 id로 구분한다. */}
            {/* todo 데이터는 통째로 props로 전달해준다. */}
            {/* onRemove(지우기), onToggle(수정) 함수를 사용하기 위해 TodoList 컴포넌트를 거쳐야하기 때문에 다시 TodoListItem에 전해준다. */}
            {todos.map((todo) => (
                <TodoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default TodoList;
