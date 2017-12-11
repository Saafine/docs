const addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

// Call
// --------------------
const obj = {
  num: 2
};
// executes addToThis function with 3 as an argument and a link to object 'obj'
addToThis.call(obj, 1, 2, 3); // 8
// ----------------------------------------------------

// Apply
// very similiar to call, but takes array as an argument
// --------------------
const arr = [1, 2, 3];
addToThis.apply(obj, arr); // 8
// ----------------------------------------------------


// Bind
// --------------------
const bound = addToThis.bind(obj); // bind returns a function that can be executed at later time
bound(1, 2, 3); // 8
// ----------------------------------------------------