import { createAction, handleActions } from 'redux-actions';

// 1. 액션 타입 정의
// const 액션타입(대문자) = 모듈 이름/액션 이름

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. 액션 생성 함수 만들기
// 앞부분에 export라는 키워드를 넣어야 추후에 이 함수를 다른 파일에서 불러와 사용할 수 있다. (여러개를 내보낼 수 있다.)

// redux-actions 사용 X

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// redux-actions 사용 O

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 3. 초기 상태 및 리듀서 함수 만들기
// export default는 단 한개만 내보낼 수 있다.

// redux-actions 사용 O

const initialState = {
    number: 0,
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
);

export default counter;

// redux- actions 사용 X

// const initialState = {
//     number: 0,
// };

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

// export default counter;
