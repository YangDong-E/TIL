// // 컴포넌트 선언 방법 1 - 함수형

import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}

export default App;

// // 컴포넌트 선언 방법 2 - 클래스형

import React, {Component} from "react";
import "./App.css";

class App extends Component {
  render(){
    const name = "react";
    return <div className="react">{name}</div>
  }
}

export default App;
