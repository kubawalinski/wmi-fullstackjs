// list matching
var [a, , b, c=4] = [1,2,3];
console.log(a,b,c);

// object matching
var {w,x,y,z:surprise} = {x:"this", y:"is", z:"amazing"}
console.log(w,x,y,surprise);

// Can be used in parameter position
function g({name: x, surname}) {
    console.log(x, surname);
}
g({name: "Tom", surname: "Jones"});
