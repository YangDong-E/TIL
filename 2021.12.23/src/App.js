import React, { Component } from 'react';
import CSSModule from './CSSModule';
import SassComponent from './SassComponent';
import StyledComponents from './StyledComponents';

class App extends Component {
    render() {
        return (
            <div>
                {/* <SassComponent /> */}
                {/* <CSSModule /> */}
                <StyledComponents />
            </div>
        );
    }
}

export default App;
