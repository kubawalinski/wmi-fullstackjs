var empty_object = {};

var person = {
	"first-name": "John",
	"last-name": "Doe"
};

var car = {
	brand: "Ford",
	model: "F-150",
	exterior: {
		color: "black",
		"cab style": "regular cab"
	},
	engine: {
		horsepower: 365,
		fuel: "unleaded"
	}
};

console.log(car.exterior["cab style"]);