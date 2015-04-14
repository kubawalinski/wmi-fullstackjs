function f(x, y, z=2*y) {
    console.log(x,y,z);
}
f(1,2,3);
f(5,8);
f(4);


function g(x, ...y) {
    console.log(y);
}
g(3, "hello", true);


function h(x, y, z) {
    console.log(x + y + z);
}
h(...[1,2,3]);