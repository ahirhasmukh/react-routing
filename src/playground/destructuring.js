//
// Object Destructuring
//

const book = {
    title : 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        //name: 'Penguin'
    }
};

const {title, author} = book;

console.log(`${title}'s auther is ${author}` );

const {name:publisherName="Hasmukh"} = book.publisher;
if(publisherName){
    console.log(`Book Publisher name is ${publisherName}` );
}

//
// Array Destructuring
//

const address = ['C 304 Divyajivan Aura', 'Gujrat', 'Gandhinagar', '382421'];

//console.log(`My address is ${address[1]}`);

// const [street, state, city, zip] = address;

// console.log(`My address is ${street} ${state} ${city} ${zip}`);

// const [,, city, zip] = address;

// console.log(`My address is  ${city} ${zip}`);


const [, , city, ,] = address;

console.log(`My address is  ${city}`);


let cities = [];

const [, , street1 = "Ahmedabad"] = cities;

console.log(`My address is  ${street1}`);