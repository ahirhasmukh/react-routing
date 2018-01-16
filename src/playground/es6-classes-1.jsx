class Person{
    constructor(name = 'Anonymous',age = 0){
        this.name = name;
        this.age = age;
    }

    getString(){
        // Create string
        return `Hi. I am a ${this.name}!`;
    }

    getDescription(){
        // Create string
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getString(){
        // Create string
        let string = super.getString();
        if(this.homeLocation){
            string += `I am visiting from ${this.homeLocation}.`;
        }
        return string;
    }
}

const obj1 = new Traveler('Hasmukh',27,'Ahmedabad');
console.log(obj1.getString());

const obj2 = new Traveler(undefined,undefined,'nowhere');
console.log(obj2.getString());
