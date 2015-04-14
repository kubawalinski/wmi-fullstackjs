"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

// lib/math.js
exports.sum = sum;
function sum(x, y) {
    return x + y;
}
var pi = exports.pi = 3.141593;

// app.js

var _libMath = require("lib/math");

var math = _interopRequireWildcard(_libMath);

alert("2? = " + math.sum(math.pi, math.pi));

// otherApp.js
var sum = _libMath.sum;
var pi = _libMath.pi;

alert("2? = " + sum(pi, pi));
Object.defineProperty(exports, "__esModule", {
    value: true
});

//# sourceMappingURL=09-modules.js.map