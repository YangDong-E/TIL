import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();

    // useCallback 사용으로 최적화
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

// 임시 함수를 선언하면서 디스패치 하는 방법

// 1. connect 함수를 사용하며 외부에 미리 선언

// const mapStateToProps = (state) => ({
//     number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//     // 임시 함수
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 2. connect 함수 내부에 익명 함수 형태로 선언

// export default connect(
//     (state) => ({
//         number: state.counter.number,
//     }),
//     (dispatch) => ({
//         increase: () => dispatch(increase()),
//         decrease: () => dispatch(decrease()),
//     })
// )(CounterContainer);

// 3. bindActionCreators 사용
// export default connect(
//     (state) => ({
//         number: state.counter.number,
//     }),
//     (dispatch) =>
//         bindActionCreators(
//             {
//                 increase,
//                 decrease,
//             },
//             dispatch
//         )
// )(CounterContainer);

// 4. 액션 생성 함수로 이루어진 객체 형태로 넣어 주는 방식
export default CounterContainer;
