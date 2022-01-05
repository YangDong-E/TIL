// 스토어 만들기

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());

// Provider로 감싸서 리액트 컴포넌트에서 스토어를 사용할 수 있도록 한다.

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root'),
);
