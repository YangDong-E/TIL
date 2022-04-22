import React from 'react';
import './TodoTemplate.scss';

// 일정 관리 웹 애플리케이션 타이틀 (기본 타이틀)
const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            {/* 타이틀 제목 */}
            <div className="app-title">일정 관리</div>
            {/* 할 일 목록 : children으로 내부 JSX를 props로 받아와서 렌더링한다. */}
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;
