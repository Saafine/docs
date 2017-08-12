// Building composites with class inheritance:
// Example 1 - (long, hard to change)
// ---------------------
class Foo {
  constructor () {
    this.a = 'a'
  }
}

class Bar extends Foo {
  constructor (options) {
    super(options);
    this.b = 'b'
  }
}
const myBar = new Bar(); // {a: 'a', b: 'b'}

// Building composites with mixin composition:
// Example 2 - (short, easy to change)
// ---------------------
const a = {
  a: 'a'
};
const b = {
  b: 'b'
};
const c = {...a, ...b}; // {a: 'a', b: 'b'}