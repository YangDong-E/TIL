// 1. Loadable Components 라이브러리를 통한 코드 스플리팅
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
    fallback: <div>loading...</div>,
});

function App() {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    const onMouseOver = () => {
        // 컴포넌트를 미리 불러오는 방법 (onMouseOver를 이용하여 마우스 커서를 올리기만 해도 로딩이 시작)
        SplitMe.preload();
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick={onClick} onMouseOver={onMouseOver}>
                    Hello React!
                </p>
                {visible && <SplitMe />}
            </header>
        </div>
    );
}

export default App;

// 2. 리액트 내장 기능 React.lazy와 컴포넌트 Suspense를 사용한 코드 스플리팅

// import React, { Suspense, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// const SplitMe = React.lazy(() => import('./SplitMe'));

// function App() {
//     const [visible, setVisible] = useState(false);
//     const onClick = () => {
//         setVisible(true);
//     };
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p onClick={onClick}>Hello React!</p>
//                 <Suspense fallback={<div>loading...</div>}>
//                     {visible && <SplitMe />}
//                 </Suspense>
//             </header>
//         </div>
//     );
// }

// export default App;

// 3. 클래스형  코드 스플리팅 SplitMe 컴포넌트

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//     state = {
//         SplitMe: null,
//     };
//     handleClick = async () => {
//         const loadedModule = await import('./SplitMe');
//         this.setState({
//             SplitMe: loadedModule.default,
//         });
//     };

//     render() {
//         const { SplitMe } = this.state;
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <p onClick={this.handleClick}>Hello React!</p>
//                     {SplitMe && <SplitMe />}
//                 </header>
//             </div>
//         );
//     }
// }

// export default App;
