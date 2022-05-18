import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import createSagaMiddleware from 'redux-saga';
import { loadableReady } from '@loadable/component';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    window.__PRELOADED_STATE__,
    applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

// 같은 내용을 쉽게 재사용할 수 있도록 렌더링할 내용을 하나의 컴포넌트로 묶음
const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

const root = document.getElementById('root');

// 프로덕션 환경에서는 loadableReady와 hydrate를 사용하고
// 개발 환경에서는 기존 방식으로 처리
if (process.env.NODE_ENV === 'production') {
    // 모든 스크립트가 로딩되고 나서 렌더링하도록 처리하는 함수
    loadableReady(() => {
        // render대신 hydrate라는 함수로 기존에 서버 사이드 렌더링된 결과물이 이미 있을 경우 세로 렌더링하지 않고
        // 기존에 존재하는 UI에 이벤트만 연동하여 애플리케이션을 초기 구동할 때 필요한 리소스를 최소화함으로써 성능을 최적화 해준다.
        ReactDOM.hydrate(<Root />, root);
    });
} else {
    ReactDOM.render(<Root />, root);
}
