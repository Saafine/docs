// Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.
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
