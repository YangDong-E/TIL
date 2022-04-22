import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
    // useState를 통한 상태관리
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트의 기초 알아보기',
            checked: true,
        },
        {
            id: 2,
            text: '컴포넌트 스타일링해 보기',
            checked: true,
        },
        {
            id: 3,
            text: '일정 관리 앱 만들어 보기',
            checked: false,
        },
    ]);

    // 고윳값으로 사용될 id
    // ref를 사용하여 변수 담기
    // useRef(4)에서 4는 위 코드 todos에 있는 요소의 id가 3까지 생성되어있기때문에 4를 주었다.
    const nextId = useRef(4);

    // useCallback을 사용하여 함수를 재사용한다.
    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            // concat을 사용하여 추가
            setTodos(todos.concat(todo));
            nextId.current += 1; // nextId 1씩 더하기
        },
        [todos]
    );

    const onRemove = useCallback(
        (id) => {
            // filter를 사용하여 id를 기준으로 삭제
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
    );

    const onToggle = useCallback(
        (id) => {
            setTodos(
                // map을 사용하여 id와 checked로 요소의 체크요소를 확인한다.
                todos.map((todo) =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo
                )
            );
        },
        [todos]
    );
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;
