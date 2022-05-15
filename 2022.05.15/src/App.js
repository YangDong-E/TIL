// 함수형 컴포넌트
import React, { Suspense, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// loadable을 사용한 코드 스플리팅 (Suspense 사용 X)
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
    fallback: <div>loading...</div>,
});

// React.lazy 와 Suspense 사용하여 코드 스플리팅
// const SplitMe = React.lazy(() => import('./SplitMe'));

function App() {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    const onMouseOver = () => {
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
                {/* <Suspense fallback={<div>loading...</div>}>
                    {visible && <SplitMe />}
                </Suspense> */}
            </header>
        </div>
    );
}

export default App;

// 클래스형 컴포넌트

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
