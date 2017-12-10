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

// Example 4 (Building composites with mixin composition):
// ---------------------
const a = {
  a: 'a'
};
const b = {
  b: 'b'
};
const c = {...a, ...b}; // {a: 'a', b: 'b'}

