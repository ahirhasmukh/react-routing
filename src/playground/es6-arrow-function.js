//console.log('arrow function');

// Simple function
function square(x){
    return x * x;
}
//console.log(square(10));

// Arrow function
// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) =>  x * x;

//console.log(squareArrow(50));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Vipul Baldaniya'));