import React from  'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Action from './components/Action';
import Header from './components/Header';
import Options from './components/Options';
import ComponentDemo from './components/mainComponent';

ReactDOM.render(<ComponentDemo  options={['hasmukh','karan']}/>,document.getElementById('app'));