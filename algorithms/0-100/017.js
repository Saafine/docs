const meta = {
  link: '',
  name: 'Palindrome',
  tags: ['recursive', 'simplyfing problem']
};


export const testData = [
  {
    args: ['abcba'],
    output: true
  },
  {
    args: ['non'],
    output: true
  },
  {
    args: ['agaga'],
    output: true
  },
  {
    args: ['connect'],
    output: false
  }
];


export function solution(str) {
  const strLen = str.length;
  if (strLen < 2) return true;
  if (str[0] !== str[strLen - 1]) return false;
  return solution(str.slice(1, -1));
}
