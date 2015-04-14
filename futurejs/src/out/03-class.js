"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

//example from https://reinteractive.net/posts/235-es6-classes-and-javascript-prototypes

var Vehicle = (function () {
    function Vehicle(name) {
        _classCallCheck(this, Vehicle);

        this.kind = "Vehicle";
        this.name = name;
    }

    _prototypeProperties(Vehicle, null, {
        printName: {
            value: function printName() {
                console.log(this.name);
            },
            writable: true,
            configurable: true
        }
    });

    return Vehicle;
})();

var Car = (function (Vehicle) {
    function Car(name) {
        _classCallCheck(this, Car);

        _get(Object.getPrototypeOf(Car.prototype), "constructor", this).call(this, name); //call the parent method with super
        this.kind = "Car";
    }

    _inherits(Car, Vehicle);

    return Car;
})(Vehicle);

var mazda = new Car("Mazda");

console.log(mazda.hasOwnProperty("name"));
console.log(mazda.hasOwnProperty("printName"));
console.log(mazda.__proto__.hasOwnProperty("printName"));
console.log(mazda.__proto__.__proto__.hasOwnProperty("printName"));

mazda.printName();

var bmw = new Car("BMW");
console.log(mazda.__proto__ == bmw.__proto__);

mazda.__proto__.printName = function () {
    console.log("Oops");
};

//delete mazda.__proto__.printName

bmw.printName();
mazda.printName();
var honda = new Car("Honda");
honda.printName();

//# sourceMappingURL=03-class.js.map