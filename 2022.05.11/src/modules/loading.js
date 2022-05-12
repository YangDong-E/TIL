import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 선언
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

/*
요청을 위한 액션 타입을 payload로 설정합니다(예: 'sample/GET_POST').
*/

export const startLoading = createAction(
    START_LOADING,
    (requestType) => requestType
);

export const finishLoading = createAction(
    FINISH_LOADING,
    (requestType) => requestType
);

// 초기상태
const initialState = {};

// 리듀서 함수
const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
    initialState
);

export default loading;
