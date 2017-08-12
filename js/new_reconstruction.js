// Example 1 (Recreation of 'new' keyword)
// ---------------------

function newSimply (constructor) {
  // create new object
  let obj = {};
  //  set the prototype
  Object.setPrototypeOf(obj, constructor.prototype);

  // We need to get rid of first arg from arguments
  // let argsArray = Array.from(arguments); // ES6 arguments to an array
  let argsArray = Array.prototype.slice.apply(arguments); // old way of converting to an array
  // execute constructor with this and
  // return the created object
  // || is obj is edge case, when Person is returning an object (it shouldnt)
  return constructor.apply(obj, argsArray.slice(1)) || obj;
}

function Person (saying) {
  this.saying = saying;
}

Person.prototype.talk = function () {
  console.log('I say:', this.saying);
};

let crockford = new Person('I am crockford');
crockford.talk();



let crockford2 = newSimply(Person, 'I am crockford2');
crockford2.talk();