const meta = {
  link: 'https://www.codewars.com/kata/52aae14aa7fd03d57400058f/train/javascript',
  name: 'Remove Zeros',
  tags: ['moving elements on array']
};

const testData = [
  {
    args: [
      [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
    ],
    output: [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
  }
];


function solution(arr) {
  const isZero = (val) => val === '0' || val === 0;
  for (let x = 1; x < arr.length; x++) {
    let previous = arr[x - 1];
    let current = arr[x];
    if (isZero(previous) && !isZero(current)) {
      arr[x] = previous;
      arr[x-1] = current;
      x-=2;
    }
  }
  return arr;
}
