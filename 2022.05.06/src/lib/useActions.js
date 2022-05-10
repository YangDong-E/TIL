import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

// 이 Hook은 액션 생성 함수를 액션을 디스패치하는 함수로 변환 해준다.
// 첫 번째 파라미터로는 액션 생성 함수로 이루어진 배열, 두 번째 파라미터로는 deps 배열이며, 이 배열 안에 들어 있는 원소가 바뀌면 액션을 디스패치하는 함수를 새로 만들게 된다.
export default function useActions(actions, deps) {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map((a) => bindActionCreators(a, dispatch));
            }
            return bindActionCreators(actions, dispatch);
        },
        deps ? [dispatch, ...deps] : deps
    );
}
