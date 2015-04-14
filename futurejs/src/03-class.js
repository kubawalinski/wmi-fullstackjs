//example from https://reinteractive.net/posts/235-es6-classes-and-javascript-prototypes
class Vehicle {
    constructor(name) {
        this.kind = 'Vehicle';
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}

class Car extends Vehicle {
    constructor(name) {
        super(name); //call the parent method with super
        this.kind = 'Car';
    }

}

var mazda = new Car('Mazda');

console.log(mazda.hasOwnProperty('name'));
console.log(mazda.hasOwnProperty('printName'));
console.log(mazda.__proto__.hasOwnProperty('printName'));
console.log(mazda.__proto__.__proto__.hasOwnProperty('printName'));

mazda.printName();

var bmw = new Car('BMW');
console.log(mazda.__proto__ == bmw.__proto__);

mazda.__proto__.printName = function () { console.log('Oops'); };

//delete mazda.__proto__.printName

bmw.printName();
mazda.printName();
var honda = new Car('Honda');
honda.printName();
