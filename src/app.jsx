import React, { Component } from 'react';
// import { add } from './modules/libA';
//import * as libA from './modules/libA';

class App extends Component {
    render(){
        return (
            <div className="app">{add(1,3)}</div>
        );
    }
}
export default App;