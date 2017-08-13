// Decorators (typescript / ES7)
// ---------------------

// Example 1
// ---------------------
function superHero(target) {
    target.isSuperHero = true;
    target.power = 'flight';
}

@superHero
class Hero { }

console.log(Hero.power); // returns flight

// Example 2
// ---------------------
// if we are applying a decorator to a method or to a function on an object,
// then we get three paramaters:
// target -> the object itself (fns)
// key -> the name of the method (squareAll)
// descriptor -> object that defines (properties from Object.defineProperty). We can for example make object readonly
function time (target, key, descriptor) {
  const origFn = descriptor.value.bind(target);
  let i = 0; // for recursive functions with the same key
  descriptor.value = function (...args) {
    let id = i++;
    console.time(key + id);
    let value = origFn(...args);
    console.timeEnd(key + id);
    return value;
  };
}

const fns = {
  @time // adds additional functionality to the squareAll function, which console logs time it took to execute the function
  squareAll(arr) {
    return arr.map(x => x * x);
  }
};

console.log(fns.squareAll([2, 4])); // returns 4, 16