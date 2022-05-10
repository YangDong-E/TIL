import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의하기
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기
// createAction을 사용하여 매번 객체를 직접 만들어 줄 필요 없이 간단하게 선언 가능
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태 만들기
const initialState = {
    number: 0,
};

// 리듀서 함수 만들기
// handleActions를 사용하면 간단하고 가독성 높게 작성이 가능하다.
// 첫번째 파라미터로는 각 액션에 대한 업데이트 함수를 넣어준다.
// 두번째 파라미터로는 초기상태를 넣어준다.
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState
);

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1,
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1,
//             };
//         default:
//             return state;
//     }
// }

export default counter;
