import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import sample, { sampleSaga } from './sample';
import loading from './loading';
import { all } from 'redux-saga/effects';

// 루트 리듀서 만들기
const rootReducer = combineReducers({
    counter,
    sample,
    loading,
});

// 루트 사가 만들기
// 추후 다른 리듀서에서도 사가를 만들어 등록하기 위해
export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐 주는 역할을 합니다.
    yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
