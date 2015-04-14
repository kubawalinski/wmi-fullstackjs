"use strict";

var name = "Bob";
var bob = {
    name: name,
    friends: ["John", "Tom"],
    printFriends: function printFriends() {
        this.friends.forEach(function (f) {
            console.log(this.name + " knows " + f);
        });
    }
};

bob.printFriends();

//# sourceMappingURL=02-arrows-this.js.map