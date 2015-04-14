function f() {
    {
        console.log(x); //should throw a ReferenceError
        let x = "start";
        y = "start";
        console.log(x,y); //z not defined here
        {
            const z = "permanent";
            //z="can't touch this";

            x = "inner";
            var y = "works everywhere";
            console.log(x,y,z);
        }
        //let x = "new value"; //illegal
    }
    //x = "end";
    y = "end";
    console.log(y); //z,x not defined here
};

f();