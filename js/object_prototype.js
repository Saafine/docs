// Example 2 (setPrototypeOf)
// ---------------------
// Object.setPrototypeOf(cat, breed); is very slow and should never be used. Use Object.create instead
let breed = {breed: 'somebreed'};
let cat = {name: 'catname'};

// `__proto__` is an object's prototype and `prototype` is an object to use as a prototype
Object.setPrototypeOf(cat, breed);

console.log(cat);
/*
returns
{
  name: 'catname'
  __proto__: {
    breed: 'somebreed'
  }
}
*/

// Example 2 (setPrototypeOf)
// ---------------------
function talk () {
  console.log(this.sound);
}

let animal = {
  talk: talk
};

let dog = {
  sound: 'woof'
};

Object.setPrototypeOf(dog, animal);
dog.talk();

// Example 3 (Object.prototype)
// ---------------------
function Person (saying) {
  this.saying = saying;
}

Person.prototype.talk = function () {
  console.log('I say:', this.saying);
};

