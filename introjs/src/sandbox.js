var car = {
	brand: "Ford",
	model: "F-150",
	get_name: function () {
		var that = this;

		var f = function ( ) {
			console.log(that);
		}

		f();

		return this.brand + ' ' + this.model;
	}
};