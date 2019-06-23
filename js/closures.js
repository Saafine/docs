// Closure is when a function can remember and access its lexical scope (outside of its block {} scope) even when it's invoked outside its lexical scope.
// --------------------
function foo() {
  const a = 'aaa';

  function bar() {
    console.log(a);
  }

  return bar;
}

const baz = foo();
baz();
// ----------------------------------------------------

/**
 * Using closures in this way is known as the module pattern:
 */
const counter = (function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1