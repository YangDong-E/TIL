import React, { useCallback, useReducer, useRef } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false,
        });
    }
    return array;
}

function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT': // 새로 추가
            // {type: 'INSERT', todo: {id: 1, text: 'todo', checked: false}}
            return todos.concat(action.todo);
        case 'REMOVE': // 제거
            // {type: 'REMOVE, id: 1}
            return todos.filter((todo) => todo.id !== action.id);
        case 'TOGGLE': // 토글(수정)
            // {type: 'TOGGLE', id:1}
            return todos.map((todo) =>
                todo.id === action.id
                    ? { ...todo, checked: !todo.checked }
                    : todo
            );
        default:
            return todos;
    }
}

const App = () => {
    // useState를 통한 상태관리
    // const [todos, setTodos] = useState(createBulkTodos);

    // useReducer를 통한 성능최적화 상태관리
    const [todos, dispatch] = useReducer(
        todoReducer,
        undefined,
        createBulkTodos
    );

    // 고윳값으로 사용될 id
    // ref를 사용하여 변수 담기
    // useRef(4)에서 4는 위 코드 todos에 있는 요소의 id가 3까지 생성되어있기때문에 4를 주었다.
    const nextId = useRef(2501);

    // useCallback을 사용하여 함수를 재사용한다.
    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        // concat을 사용하여 추가
        // useState의 함수형 업데이트를 사용한 컴포넌트 성능 최적화
        // setTodos((todos) => todos.concat(todo));

        // useReducer를 사용한 컴포넌트 성능 최적화 (dispatch)
        dispatch({ type: 'INSERT', todo });
        nextId.current += 1; // nextId 1씩 더하기
    }, []);

    const onRemove = useCallback((id) => {
        // filter를 사용하여 id를 기준으로 삭제
        // useState의 함수형 업데이트를 사용한 컴포넌트 성능 최적화
        // setTodos((todos) => todos.filter((todo) => todo.id !== id));

        // useReducer를 사용한 컴포넌트 성능 최적화 (dispatch)
        dispatch({ type: 'REMOVE', id });
    }, []);

    const onToggle = useCallback((id) => {
        // useState의 함수형 업데이트를 사용한 컴포넌트 성능 최적화
        // setTodos(
        //     // map을 사용하여 id와 checked로 요소의 체크요소를 확인한다.
        //     (todos) =>
        //         todos.map((todo) =>
        //             todo.id === id ? { ...todo, checked: !todo.checked } : todo
        //         )
        // );

        // useReducer를 사용한 컴포넌트 성능 최적화 (dispatch)
        dispatch({ type: 'TOGGLE', id });
    }, []);
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;
