const meta = {
  link: 'https://www.codewars.com/kata/the-observed-pin/train/javascript?fbclid=IwAR04oxil_zHttgpfneRCHtSfvxHVDA3U_X3t6NUAxJnCnhhAqra1zMharD0',
  name: 'The observed PIN',
  tags: []
};

// Warning!
// test data output can have different order, so the test will fail for === assertions
// --------------------
export const testData = [
  {
    args: ['8'],
    output: ['5', '7', '8', '9', '0']
  },
  {
    args: ['11'],
    output: ['11', '22', '44', '12', '21', '14', '41', '24', '42']
  },
  {
    args: ['369'],
    output: ['339', '366', '399', '658', '636', '258', '268', '669', '668', '266', '369', '398', '256', '296', '259', '368', '638', '396', '238', '356', '659', '639', '666', '359', '336', '299', '338', '696', '269', '358', '656', '698', '699', '298', '236', '239']
  },
];

const keyboard = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  [null, '0', null]
];

const keyIndexes = {
  '1': [0, 0],
  '2': [0, 1],
  '3': [0, 2],

  '4': [1, 0],
  '5': [1, 1],
  '6': [1, 2],

  '7': [2, 0],
  '8': [2, 1],
  '9': [2, 2],

  '0': [3, 1]
};

const keySolutions = (() => {
  const keyGroups = {};
  for (let key in keyIndexes) {
    keyGroups[key] = keySolver(key);
  }
  return keyGroups;
})();

function getPINs(str, variation = '', result = []) {
  if (str.length === variation.length) {
    result.push(variation);
    return result;
  }

  const keyCheckedIdx = variation.length;
  const keyValue = str[keyCheckedIdx];
  const keyPaths = keySolutions[keyValue];

  for (let key of keyPaths) {
    getPINs(str, variation + key, result);
  }

  return result;
}

function keySolver(key) {
  const [x, y] = keyIndexes[key];
  const possibleKeys = [key];
  [
    [x, y - 1],
    [x, y + 1],
    [x - 1, y],
    [x + 1, y]
  ].forEach(([adjacentX, adjacentY]) => {
    if (getElement(adjacentX, adjacentY)) {
      possibleKeys.push(keyboard[adjacentX][adjacentY]);
    }
  });

  return possibleKeys;
}

function getElement(x, y) {
  return keyboard && keyboard[x] && keyboard[x][y];
}

