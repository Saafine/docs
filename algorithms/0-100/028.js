const meta = {
  link: 'https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3/train/javascript',
  name: 'Vigenère Cipher Helper',
  tags: ['encryption']
};

export const testData = [
  {
    args: ['TO JEST BARDZO TAJNY TEKST', 'TAJNE'],
    output: 'MO SRWM BJEHSO CNNGY CROLT'
  }
];

function getVinegereMatrix(dictionary) {
  return dictionary.split('').reduce((acc, curr, idx, src) => {
    acc[idx] = [];
    const left = src.slice(idx);
    const right = src.slice(0, idx);
    acc[idx].push(...left, ...right);
    return acc;
  }, []);
}

function getHashKeyForMessage(message, key) {
  const keyLen = key.length - 1;
  return message.split('').reduce((acc) => {
    acc.key += key[acc.idx];
    acc.idx = acc.idx === keyLen ? acc.idx = 0 : acc.idx + 1;
    return acc;
  }, { key: '', idx: 0 }).key;
}

function VigenèreCipher(privateKey, dictionary) {
  const matrix = getVinegereMatrix(dictionary);

  this.encode = function(msgToEncode) {
    const hashKey = getHashKeyForMessage(msgToEncode, privateKey);
    return msgToEncode.split('').map((char, idx) => {
      if (!dictionary.includes(char)) return char;
      const x = matrix[0].findIndex(x => x === char);
      const y = matrix.findIndex(x => x[0] === hashKey[idx]);
      return matrix[x][y];
    }).join('');
  };
  this.decode = function(msgToDecode) {
    const hashKey = getHashKeyForMessage(msgToDecode, privateKey);
    return msgToDecode.split('').reduce((acc, char, idx) => {
      if (!dictionary.includes(char)) return acc + char;
      const x = matrix[0].findIndex(x => x === hashKey[idx]);
      const y = matrix[x].findIndex(x => x === char);
      return acc + matrix[0][y];
    }, '');
  };
}
