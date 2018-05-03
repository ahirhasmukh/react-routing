import React from  'react';
import ReactDOM from 'react-dom';
import ComponentDemo from './components/mainComponent';
import 'normalize.css/normalize.css';
import './styles/style.scss';

ReactDOM.render(<ComponentDemo  options={['hasmukh','karan']}/>,document.getElementById('app'));