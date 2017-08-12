// Composing Functions
// https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea
//
// Example 1 (not good)
// ---------------------
const g = n => n + 1;
const f = n => n * 2;
const doStuff = x => {
  const afterG = g(x);
  const afterF = f(afterG);
  return afterF;
};

let a = doStuff(20); // 42
a;

// Example 2 (better)
// ---------------------
const g = n => n + 1;
const f = n => n * 2;
const doStuffBetter = x => f(g(x));

let b = doStuffBetter(20); // 42
b;

// Example 1 (easier debugging)
// ---------------------
const doStuff = x => {
  const afterG = g(x);
  console.log(`after g: ${ afterG }`);
  const afterF = f(afterG);
  console.log(`after f: ${ afterF }`);
  return afterF;
};
doStuff(20); // =>
/*
 "after g: 21"
 "after f: 42"
 */

// Example 2 (harder debugging)
// ---------------------
const trace = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
};

// same as above
const trace = function (label) {
  return function (value) {
    console.log(`${ label }: ${ value }`);
    return value; // returning value is necessary for piping
  }
};

const doStuff = x => {
  const afterG = g(x);
  trace('after g')(afterG);
  const afterF = f(afterG);
  trace('after f')(afterF);
  return afterF;
};
doStuff(20); // =>
/*
 "after g: 21"
 "after f: 42"
 */

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const doStuffBetter = pipe(
  g,
  trace('after g'),
  f,
  trace('after f')
);

doStuffBetter(20); // =>
/*
 "after g: 21"
 "after f: 42"
 */
