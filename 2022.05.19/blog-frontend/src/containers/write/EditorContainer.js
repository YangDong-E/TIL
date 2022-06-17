import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const { title, body } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
    }));
    // Editor 컴포넌트에서 사용할 useEffect와 onChangeFiled를 사용하기 위해 useCallback으로 감싸 주었다.
    const onChangeField = useCallback(
        (payload) => dispatch(changeField(payload)),
        [dispatch],
    );
    // 언마운트될 때 초기화
    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);
    // Quill 에디터는 일반 input이나 textarea가 아니기 때문에 onChange와 value값으로 상태를 관리할 수 없다.
    return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
