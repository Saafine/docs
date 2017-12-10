const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

let adder = x => {
  return x + 1;
};

let multiplier = x => {
  return x * 2;
};

let resolve = pipe(
  adder,
  multiplier
);

console.log(resolve(20)); // 42