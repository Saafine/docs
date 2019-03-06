// https://www.codewars.com/kata/bit-counting/train/javascript

const inputs = [
  {
    arguments: [[10]],
    output: 2
  }
];

const [arr, target] = inputs[0].arguments;

const countBits = function(n) {
  let count = 0;
  while (n > 0) {
    if (n & 1) count++;
    n = Math.floor(n / 2);
  }
  return count;
};

const result = countBits(arr);
console.log(result);

// ----------------------------------------------------
var countBits2 = function(n) {
  const matchResult = (n).toString(2).match(/[1]/g);
  return !matchResult ? 0 : matchResult.length;
};
