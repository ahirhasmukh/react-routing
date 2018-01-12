'use strict';

// Argument object - no longer bound with arrow function
var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};
console.log(add(5, 10, 15, 20, 25));

// this keyword - no longer bound

var user = {
    name: 'Hasmukh',
    cities: ['Ahmedabad', 'Rajkot', 'Pune'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // .forEach use for facing data
        // return this.cities.forEach((city) => {
        //     console.log(city);
        //     return city;
        // });

        //return this.cities.map((city) => city );

        // .map use for mapping data
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
