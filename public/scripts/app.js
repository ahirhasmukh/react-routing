'use strict';

//console.log('arrow function');

// Simple function
function square(x) {
    return x * x;
}
//console.log(square(10));

// Arrow function
// const squareArrow = (x) => {
//     return x * x;
// }

var squareArrow = function squareArrow(x) {
    return x * x;
};

//console.log(squareArrow(50));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Vipul Baldaniya'));
