import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    // 리액트 라우터를 적용하기 위해 react-router-dom에 내장 되어있는 BrowserRouter 컴포넌트로 감싼다.
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
