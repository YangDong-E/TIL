import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestSaga(type, requset) {
    // 성공 및 실패 액션 타입을 정의
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    // redux-saga를 사용하여 반복 코드 간결화

    return function* (action) {
        yield put(startLoading(type)); // 로딩 시작
        try {
            const response = yield call(requset, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            });
        }
        yield put(finishLoading(type)); // 로딩 끝
    };
}
