const meta = {
  link: '',
  name: 'Cesar Cipher',
  tags: []
};

const testData = [
  {
    args: ['hackerrank is amazing', 1],
    output: 'ibdlfssbol jt bnbajoh'
  },
  {
    args: ['abz', 1],
    output: 'bca'
  },
  {
    args: ['hackerrank', 7],
    output: 'ohjrlyyhur'
  },
  {
    args: ['ibdlfssbol jt bnbajoh', 1, 'decrypt'],
    output: 'hackerrank is amazing'
  },
  {
    args: ['bca', 1, 'decrypt'],
    output: 'abz'
  },
  {
    args: ['ohjrlyyhur', 7, 'decrypt'],
    output: 'hackerrank'
  }
];

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
const alphabetLastIndex = alphabet.length - 1;
const alphabetCodeCharMap = alphabet.reduce((acc, val, index) => {
  return {
    ...acc,
    [val]: index
  };
}, {});

function encrypt(str, shift) {
  return Array.from(str).map((char) => {
    return alphabetCodeCharMap.hasOwnProperty(char) ? encryptChar(char, shift) : char;
  }).join('');
}

function encryptChar(char, shift) {
  const code = alphabetCodeCharMap[char];
  const encryptedCode = getEncryptedCharcode(code + shift);
  return alphabet[encryptedCode];
}

function getEncryptedCharcode(charCode) {
  return charCode > alphabetLastIndex ? charCode % alphabetLastIndex - 1 : charCode;
}

function decrypt(str, shift) {
  return Array.from(str).map((char) => {
    return alphabetCodeCharMap.hasOwnProperty(char) ? decryptChar(char, shift) : char;
  }).join('');
}

function decryptChar(char, shift) {
  const code = alphabetCodeCharMap[char];
  const encryptedCode = getDecryptedCharcode(code - shift);
  return alphabet[encryptedCode];
}

function getDecryptedCharcode(charCode) {
  return charCode < 0 ? alphabetLastIndex + 1 + charCode % alphabetLastIndex : charCode;
}

function solution(str, shift, mode) {
  return mode === 'decrypt' ? decrypt(str, shift) : encrypt(str, shift);
}

trySolution(solution, testData);

function trySolution(solutionFn, cases, specifyIdx = undefined) {
  let casesLen = cases.length;
  let startIdx = specifyIdx || 0;
  if (typeof specifyIdx !== 'undefined') {
    casesLen = startIdx + 1;
  }

  for (let x = startIdx; x < casesLen; x++) {
    const args = cases[x].args;
    const expectedOutput = cases[x].output;
    const testOutput = solutionFn(...args);
    const result = testOutput === expectedOutput;
    if (!result) {
      console.error(`[${ x }] FAIL | Expected: ${ expectedOutput } | Got: ${ testOutput }`);
    } else {
      console.log(`[${ x }] Success`);
    }
  }
}


