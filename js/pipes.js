// Pipes:
// ---------------------
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

let adder = x => {
  return x + 1;
};

let multiplier = x => {
  return x * 2;
};

let getResult = pipe(
  adder,
  multiplier
);

let result = getResult(20); // pass argument that goes through each function inside the pipe
console.log(result);
// 42