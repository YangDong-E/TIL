import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './modules';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tempSetUser, check } from './modules/user';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// index.js에서 사용자 정보를 불러오도록 처리하고 컴포넌트를 렌더링시켜 깜빡임 현상을 없앰
function loadUser() {
    try {
        const user = localStorage.getItem('user');
        if (!user) return; // 로그인 상태가 아니라면 아무것도 안 함
        store.dispatch(tempSetUser(JSON.parse(user)));
        store.dispatch(check());
    } catch (e) {
        console.log('localStorage is not working');
    }
}

sagaMiddleware.run(rootSaga);
// sagaMiddleware.run이 호출된 이후에 loadUser함수를 호출
// 먼저 호출되면 CHECK 액션을 디스패치했을 때 사가에서 제대로 처리를 하지 못한다.
loadUser();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
