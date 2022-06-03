import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const App = () => {
    return <div>hello React!</div>;
};

ReactDom.render(<App />, document.getElementById('root'));
