"use strict";

// list matching
var _ref = [1, 2, 3];
var a = _ref[0];
var b = _ref[2];
var _ref$3 = _ref[3];
var c = _ref$3 === undefined ? 4 : _ref$3;

console.log(a, b, c);

// object matching
var _ref2 = { x: "this", y: "is", z: "amazing" };
var w = _ref2.w;
var x = _ref2.x;
var y = _ref2.y;
var surprise = _ref2.z;

console.log(w, x, y, surprise);

// Can be used in parameter position
function g(_ref3) {
    var x = _ref3.name;
    var surname = _ref3.surname;

    console.log(x, surname);
}
g({ name: "Tom", surname: "Jones" });

//# sourceMappingURL=05-destructuring.js.map