const meta = {
  link: 'https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript',
  name: 'Primes in numbers',
  tags: ['prime numbers', 'generators']
};

export const testData = [
  {
    args: [[1, 2, 0, 1, 0, 1, 0, 3, 0, 1]],
    output: [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
  },
  {
    args: [[false, 1, 0, 1, 2, 0, 1, 3, 'a']],
    output: [false, 1, 1, 2, 1, 3, 'a', 0, 0]
  }
];

function isPrime(num) {
  if (num === 2) return true; // only even number that is prime
  if (!(num & 1)) return false; // if can be divided by two, its not a prime
  const maxDivider = Math.abs(Math.sqrt(num)); // max value used to to divide num
  for (let x = 2; x <= maxDivider; x++) {
    if (num % x === 0) return false;
  }
  return true;
}

function* primeGeneratorFn() {
  for (let x = 2; ; x++) {
    if (isPrime(x)) yield x;
  }
}

function getFactorials(num, primesGenerator, prime, result = [], max = Math.abs(Math.sqrt(num))) {
  const nextPrime = prime || primesGenerator.next().value;

  if (nextPrime > max) {
    if (num > 1) result.push(num);
    return result;
  }

  const numberRest = num % nextPrime;
  if (numberRest === 0) {
    result.push(nextPrime);
    return getFactorials(num / nextPrime, primesGenerator, nextPrime, result, max);
  }

  return getFactorials(num, primesGenerator, undefined, result, max);
}

function primeFactors(num) {
  const primes = primeGeneratorFn();
  const factorials = getFactorials(num, primes);

  const unify = factorials.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : acc[cur] = 1;
    return acc;
  }, {});

  const formatQuantifier = (value, quantifier) => {
    return quantifier > 1 ? `(${ value }**${ quantifier })` : `(${ value })`;
  };

  return Object.keys(unify).reduce((acc, cur) => {
    const [value, quantifier] = [cur, unify[cur]];
    return `${ acc }${ formatQuantifier(value, quantifier) }`;
  }, '');
}

// Other people's code
// --------------------
function primeFactors(n) {
  for (var i = 2, res = '', f; i <= n; i++) {
    f = 0;
    while (n % i == 0) {
      f++;
      n /= i;
    }
    res += f ? '(' + (f > 1 ? i + '**' + f : i) + ')' : '';
  }
  return res || '(' + n + ')';
}
