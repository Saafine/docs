const meta = {
  link: 'https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript',
  name: 'String incrementer',
  tags: ['regex', 'array fill']
};

export const testData = [
  {
    args: ['foo'],
    output: 'foo1'
  },
  {
    args: ['foobar23'],
    output: 'foobar24'
  },
  {
    args: ['foo0042'],
    output: 'foo0043'
  },
  {
    args: ['foo9'],
    output: 'foo10'
  },
  {
    args: ['foo099'],
    output: 'foo100'
  },
];


export function solution(str) {
  return str.search(/[\d]{1,}/g) < 0 ? str + '1' : str.replace(/[\d]{1,}/g, (part) => {
    const value = String(Number(part) + 1);
    return value.length >= part.length ? value : new Array(part.length - value.length).fill('0').join('') + value;
  });
}
