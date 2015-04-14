"use strict";

function f(x, y) {
    var z = arguments[2] === undefined ? 2 * y : arguments[2];
    return (function () {
        console.log(x, y, z);
    })();
}
f(1, 2, 3);
f(5, 8);
f(4);

function g(x) {
    for (var _len = arguments.length, y = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        y[_key - 1] = arguments[_key];
    }

    console.log(y);
}
g(3, "hello", true);

function h(x, y, z) {
    console.log(x + y + z);
}
h.apply(undefined, [1, 2, 3]);

//# sourceMappingURL=06-default-rest-spread.js.map