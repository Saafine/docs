const meta = {
  link: 'https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript',
  name: 'Moving Zeros To The End',
  tags: ['swapping array elements']
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


export function solution(arr) {
  const zeroless = arr.filter((x) => x !== 0);
  return zeroless.concat(new Array(arr.length - zeroless.length).fill(0))
}


