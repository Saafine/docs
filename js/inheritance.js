// Check if nested objects are inherited ,if neccessary

// Example 1 (Classical Inheritance)
// ---------------------
class Shape { getCenter () { /* … */ } }
class Circle extends Shape { getRadius () { /* … */ } }
class Smiley extends Circle { isWinking () { /* … */ } }
let face = new Smiley(); // initialization function called automatically
face.getCenter();

// Example 2 (Prototypal Inheritance)
// ---------------------
let shape = {getCenter() { /* … */ }};
let circle = Object.create(shape, {getRadius() { /* … */ }});
let smiley = Object.create(circle, {isWinking() { /* … */ }});
let face = Object.create(smiley);
face.initialize(); // need to manually initialize
face.getCenter();

// Example 3 (Concatenative Inheritance)
// ---------------------
let shape = {getCenter() { /* … */ }};
let circle = Object.assign({}, shape, {getRadius() { /* … */ }});
let smiley = Object.assign({}, circle, {isWinking() { /* … */ }});
let face = Object.assign({}, smiley);
face.initialize(); // need to manually initialize
face.getCenter();

// Example 4
// ---------------------
let w = arg => document.writeln(arg);

class test1 {
  test1 () {
    w('class test 1');
  }
}

class test1A extends test1 {
  test2 () {
    w('class test 1A only');
  }
}

let example1 = new test1();
example1.test1();
w('<br/>');
let example1A = new test1A();
example1.test1();
w('<br/>');
example1A.test2();

// returns: (class inheritance)
// class test 1
// class test 1
// class test 1A only
let test2 = {
  test1: () => {w('object test2');}
};
w('<br/>');
w('----------------------------');
w('<br/>');

test2.test1();

let test2A = Object.assign({}, test2,
  {
    test2: () => {w('object test 2A only');}
  }
);
w('<br/>');
test2A.test1(); // inherited
w('<br/>');
test2A.test2();



