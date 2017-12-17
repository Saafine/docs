// Implicit binding
var obj = {
	a: 2,
  b: 3,
  // when called, returns 2
	foo: function() {
  	console.log(this.a);
  },
  // undefined, arrow function
  bar: () => {
  	console.log(this.b);
  }
};

obj.foo(); // 2

// Implicit binding lost
var obj = {
	a: 2,
	foo: function() {
  	console.log(this.a);
  }
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"