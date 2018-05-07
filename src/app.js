import React from  'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//import 'normalize.css/normalize.css';
import './styles/style.scss';

const homeComponent = () => (
    <div>
        <p>This is root component</p>
    </div>
);

const CreatComponent = () => (
    <div>
        <p>This is creat Component</p>
    </div>
);

const EditComponent = () => (
    <div>
        <p>This is edit Component</p>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={homeComponent} exact={true}/>
            <Route path="/create" component={CreatComponent}/>
            <Route path="/edit" component={EditComponent}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));