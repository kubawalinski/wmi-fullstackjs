"use strict";

function f() {
    {
        console.log(x); //should throw a ReferenceError
        var x = "start";
        y = "start";
        console.log(x, y); //z not defined here
        {
            var z = "permanent";
            //z="can't touch this";

            x = "inner";
            var y = "works everywhere";
            console.log(x, y, z);
        }
        //let x = "new value"; //illegal
    }
    //x = "end";
    y = "end";
    console.log(y); //z,x not defined here
};

f();

//# sourceMappingURL=07-let-const.js.map