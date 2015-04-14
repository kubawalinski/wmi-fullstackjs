"use strict";

// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size);
console.log(s.has("hello"));

// Maps
var key = {};
var m = new Map();
m.set(key, 42);
m.set(s, 34);
console.log(m.get(s));
console.log(m.get(key));
console.log(m.get({}));

//# sourceMappingURL=08-maps-sets.js.map