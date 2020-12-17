const meta = {
  link: 'https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript',
  name: 'Replace With Alphabet Position',
  tags: ['string position', 'letter to number']
};

const inputs = [
  {
    arguments: ['The sunset sets at twelve o\' clock.'],
    output: '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
  },
  {
    arguments: ['The narwhal bacons at midnight.'],
    output: '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
  }
];

const test = 0;
const [str] = inputs[test].arguments;
const output = inputs[test].output;

function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return text.toLowerCase().split('').reduce((acc, char) => {
    const idx = alphabet.indexOf(char) + 1;
    return !!idx ? acc + idx + ' ' : acc;
  }, '').trim();
}

const result = alphabetPosition(str);

console.log(result === output);
console.log(alphabetPosition(str));

// ----------------------------------------------------
function alphabetPosition2(text) {
  const result = text.toLocaleLowerCase().replace(/[^a-z]/ig, '').split('').map(char => char.charCodeAt()-96).join(' ')
  return result;
}
