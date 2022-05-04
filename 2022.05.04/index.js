// 이전에 진행한 리덕스에서는 createStore만 불러와서 사용하였지만,
// 현재 버전이 업데이트하면서 이 코드로 적용하면 된다.
import { legacy_createStore as createStore } from 'redux';

// 1. DOM 레퍼런스 만들기
// 수정할 DOM 노드를 가리키는 값을 직접 미리 선언 해준다.
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 2. 액션 타입과 액션 생성 함수 정의
// 프로젝트의 상태에 변화를 일으키는 것을 액션이라고 하며 액션에 이름은 주로 대문자로 작성하고 고유한 문자열형태로 정의한다.
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 정의한 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수를 작성한다.
// 액션 객체는 type 값을 반드시 갖고 있어야 하며, 그외에 추후 상태를 업데이트할 때 참고하고 싶은 값은 자유롭게 넣을 수 있다.
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 3 .초기 값 설정
// 초기값의 형태는 자유이며, 숫자,문자열,객체 등이 될 수 있다.
const initialState = {
    toggle: false,
    counter: 0,
};

// 4. 리듀서 함수 정의
// 리듀서는 변화를 일으키는 함수이다. 함수의 파라미터로는 state와 action 값을 받아온다.
// 리듀서 함수가 맨 처음 호출될 때는 state값이 undefined이다.
// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // * 불변성 유지를 해 주어야 합니다. *
                toggle: !state.toggle,
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
}

// 5. 스토어 만들기(createStore)
// 함수의 파라미터에는 리듀서 함수를 넣어 주어야 한다.
const store = createStore(reducer);

// 6. render 함수 만들기
// 상태가 업데이트될 때마다 호출되며, 리액트의 render 함수와는 다르게 이미 html을 사용하여 만들어진 UI의 속성을 상태에 따라 변경해준다.
const render = () => {
    const state = store.getState(); // 현재 상태를 불러옵니다.
    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
};

render();

// 7. 구독하기 (subscribe)
// 스토어의 상태가 바뀔 때마다 방금 만든 render 함수가 호출되도록 해 준다.
// 파라미터로는 함수 형태의 값을 전달해 준다. 이렇게 전달된 함수는 추후 액션이 발생하여 상태가 업데이트될 때마다 호출된다.
store.subscribe(render);

// 8. 액션 발생시키기
// 액션을 발생시키는 것을 dispatch라고 하며, 파라미터는 액션 객체를 넣어주면 된다.
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};
