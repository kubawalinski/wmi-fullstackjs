"use strict";

// Basic literal string creation
console.log("In JavaScript '\t\t' is a couple of tabs.");

// Multiline strings
console.log("In JavaScript this is\n not legal.");

// String interpolation
var name = "Bob",
    time = "today";
console.log("Hello " + name + ", how are you " + time + "?");

// more complicated interpolation
var car = { make: "Mazda", model: "RX-8", production: [2007, 2008, 2009] };
console.log("Production of " + car.make + " " + car.model + " started " + car.production[0] + ".");

//# sourceMappingURL=04-template-strings.js.map