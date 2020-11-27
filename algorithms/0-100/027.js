const meta = {
  link: 'https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript?fbclid=IwAR3Ur8yTrMM9fArBKQ1n_73j5QdXiTiDGA0DOkKNwntFpvIAE-S8c9LGZeY',
  name: 'Multiplying numbers as strings',
  tags: ['big numbers', 'multiplying strings']
};

const testData = [
  {
    args: ['0000001', '3'],
    output: '3'
  },
  {
    args: ['1020303004875647366210', '2774537626200857473632627613'],
    output: '2830869077153280552556547081187254342445169156730'
  }
];

function multiply(a, b) {
  const sums = multiplyToSums(a, b);
  const paddedSums = padSums(sums);
  return sumMultiplicationProducts(paddedSums);
}

function sumMultiplicationProducts(sums) {
  const result = [];
  const productsLength = sums[0].length;

  let carryOn = 0;
  let value;

  for (let x = productsLength - 1; x >= 0; x--) {
    value = 0;
    for (let y = 0; y < sums.length; y++) {
      value = Number(sums[y][x]) + value;
    }
    value += carryOn;

    if (value >= 10) {
      carryOn = Math.floor(value / 10);
      value = value % 10;
      result.unshift(value);
    } else {
      carryOn = 0;
      result.unshift(value);
    }
  }

  if (carryOn) {
    result.unshift(carryOn);
  }

  const resultWithoutZerosOnLeft = result.join('').replace(/^0*/, '');
  return resultWithoutZerosOnLeft ? resultWithoutZerosOnLeft : '0';
}

function padSums(sums) {
  const padLength = sums.reduce((acc, sum, idx) => {
    const size = sum.length + idx;
    return size > acc ? size : acc;
  }, 0);
  return sums.map((sum, idx) => {
    const paddedSum = sum.padEnd(sum.length + idx, '0');
    return paddedSum.length < padLength ? paddedSum.padStart(padLength, '0') : paddedSum;
  });
}

function multiplyToSums(a, b) {
  const sums = [];

  for (let idxB = b.length - 1; idxB >= 0; idxB--) {
    const sumsInner = [];
    let carryOn = 0;
    sums.push(sumsInner);
    for (let idxA = a.length - 1; idxA >= 0; idxA--) {
      const value = Number(a[idxA]) * Number(b[idxB]) + carryOn;
      const val = value % 10;
      carryOn = Math.floor(value / 10);
      sumsInner.unshift(val);
      if (idxA === 0 && carryOn) {
        sumsInner.unshift(carryOn);
      }
    }
  }
  return sums.map((g) => g.join(''));
}
