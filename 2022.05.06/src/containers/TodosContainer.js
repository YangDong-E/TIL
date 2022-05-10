import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';

const TodosContainer = () => {
    // useSelector를 사용한 상태 조회 하기
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }));

    // useActions를 사용하여 여러개의 액션을 사용해야 할 때 코드를 훨씬 깔끔하게 정리하여 작성할 수 있다.
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
    );

    // const dispatch = useDispatch();
    // const onChangeInput = useCallback(
    //     (input) => dispatch(changeInput(input)),
    //     [dispatch]
    // );
    // const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
    // const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
    // const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

// useSelector를 사용하여 리덕스 상태를 조회했을 때는 connect를 이용한 최적화 작업이 자동으로 이루어지지 않으므로, 성능 최적화를 위해서는 React.memo를 사용해야한다.
export default React.memo(TodosContainer);
