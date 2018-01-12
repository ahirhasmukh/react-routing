// Argument object - no longer bound with arrow function
const add = (a , b ) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(5,10,15,20,25));

// this keyword - no longer bound

const user = {
    name : 'Hasmukh',
    cities: ['Ahmedabad','Rajkot','Pune'],
    printPlacesLived: function () {
        // .forEach use for facing data
        // return this.cities.forEach((city) => {
        //     console.log(city);
        //     return city;
        // });
    
        //return this.cities.map((city) => city );

        // .map use for mapping data
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers : [10,20,30],
    multiplyBy:5,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply());
