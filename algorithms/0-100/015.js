const meta = {
  link: 'https://www.codewars.com/kata/simple-pig-latin',
  name: 'Modify letters',
  tags: ['strings', 'regex', 'string search']
};

export const testData = [
  {
    args: ['Pig latin is cool'],
    output: 'igPay atinlay siay oolcay'
  },
  {
    args: ['This is my string'],
    output: 'hisTay siay ymay tringsay'
  },
  {
    args: ['Quis custodiet ipsos custodes ?'],
    output: 'uisQay ustodietcay psosiay ustodescay ?'
  }
];


export function solution(str) {
  return str
    .split(' ')
    .map(word => word.search(/[a-z]/gi) < 0 ? word : `${ word.slice(1) }${ word[0] }ay`)
    .join(' ');
}
