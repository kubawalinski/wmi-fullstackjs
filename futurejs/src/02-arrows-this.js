var name = "Bob";
var bob = {
    name,
    friends: ["John", "Tom"],
    printFriends() {
        this.friends.forEach(function(f)
        {
            console.log(this.name + " knows " + f)
        });
    }
};

bob.printFriends();