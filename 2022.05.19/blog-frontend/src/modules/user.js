import { createAction, handleActions } from 'redux-actions';
import { call, takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
    createRequestActionTypes('user/CHECK');

// 로그아웃 : 성공/실패 여부가 중요하지 않으므로 추가 액션은 만들지 않는다.
const LOGOUT = 'user/LOGOUT';

// 액션 생성
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);

// 로그아웃 액션 생성
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

// CHECK_FAILURE 액션이 발생할 때 호출될 함수 생성
function checkFailureSaga() {
    try {
        localStorage.removeItem('user'); // localStorage에서 user를 제거
    } catch (e) {
        console.log('localStorage is not working');
    }
}

// 로그아웃 액션이 발생할 때 호출될 함수 생성
function* logoutSaga() {
    try {
        yield call(authAPI.logout); // logout API 호출
        localStorage.removeItem('user'); // localStorage에서 user를 제거
    } catch (e) {
        console.log(e);
    }
}

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    user: null,
    checkError: null,
};

export default handleActions(
    {
        [TEMP_SET_USER]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [CHECK_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            checkError: null,
        }),
        [CHECK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            user: null,
            checkError: error,
        }),
        [LOGOUT]: (state) => ({
            ...state,
            user: null,
        }),
    },
    initialState,
);
