const meta = {
  link: 'https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript',
  name: 'IQ Test',
  tags: ['string to number',]
};

const inputs = [
  {
    arguments: ['2 4 7 8 10'],
    output: 3
  },
  {
    arguments: ['1 2 1 1'],
    output: 2
  }
];

const test = 1;
const [arg1] = inputs[test].arguments;
const output = inputs[test].output;

function iqTest(numbers) {
  const arr = numbers.split(' ');
  const arrLen = arr.length;
  if (arrLen < 3) return -1;

  const target = [0, 1, 2].reduce((acc, idx) => {
    return acc + Number(arr[idx] & 1)
  }, 0) < 2 ? 1 : 0;

  for (let x = 0; x < arrLen; x++) {
    if (Number(arr[x] & 1) === target) return x + 1;
  }
}

const result = iqTest(arg1);
result;
