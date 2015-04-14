//revealing module pattern
var obj = (function () {
	var value = 0;

	return {
		increment: function (inc) {
			value += inc;
		},
		print: function () {
			console.log(value);
		}
	}
})();

obj.increment(3);
obj.print();
