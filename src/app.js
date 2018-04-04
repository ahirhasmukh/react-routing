// import './utility';
//var validator = require('validator');
import validator from 'validator';
import React from  'react';
import ReactDOM from 'react-dom';

import './person.jsx';
import canDrink123, {isAdult} from './person.jsx';
import {square , add} from './utility';

console.log('app running');
 console.log(square(3));
// console.log(add(5,5));
// console.log(isAdult(19));
// console.log(canDrink123(2));

console.log(validator.isEmail('foo@gmail.com'));