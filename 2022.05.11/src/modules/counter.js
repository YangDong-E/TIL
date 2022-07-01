import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest, select } from 'redux-saga/effects';

// 액션 타입을 선언
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 마우스 클릭 이벤트 payload 안에 들어가지 않도록
// () => undefinde를 두 번째 파라미터로 넣어 줍니다.
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

// 제너레이터 함수를 만들며, 이 함수를 사가라고 부른다.
function* increaseSaga() {
    yield delay(1000); // 1초를 기다립니다.
    yield put(increase()); // 특정 액션을 디스패치합니다.
    // saga의 기능으로 select를 사용하여 현재 상태를 참조 할 수 있다.
    const number = yield select((state) => state.counter); // state는 스토어 상태를 의미함
    console.log(`현재 값은 ${number} 입니다.`);
}

function* decreaseSaga() {
    yield delay(1000); // 1초를 기다립니다.
    yield put(decrease()); // 특정 액션을 디스패치합니다.
}

export function* counterSaga() {
    // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 줍니다.
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고
    // 가장 마지막으로 실행된 작업만 수행합니다.
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// 초기 상태
const initialState = 0; // 상태는 꼭 객체일 필요가 없다. 숫자도 작동 가능

// 리듀서 함수
const counter = handleActions(
    {
        [INCREASE]: (state) => state + 1,
        [DECREASE]: (state) => state - 1,
    },
    initialState
);

export default counter;