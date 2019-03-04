const input = ['London', 'Donlon'];
// const input = ['London', 'Dubai', 'Tokyo', 'Kyoto', 'Donlon'];
const expectedOutput = [['London', 'Donlon'], ['Dubai'], ['Tokyo', 'Kyoto']];

function getPossibleCombinations(original) {
  const possbileCombinations = original.length;
  const combinations = [original];
  let temp = original;
  for (let x = 1; x < possbileCombinations; x++) {
    temp = temp.split('');
    temp.unshift(temp.pop());
    temp = temp.join('');
    combinations[x] = temp[0].toUpperCase() + temp.slice(1).toLowerCase();
  }
  return combinations;
}

function areValuesShared(compareA, compareB) {
  return compareA.some(val => compareB.includes(val));
}

function groupWords(input) {
  const output = [];
  input.forEach((val) => {
    const test = getPossibleCombinations(val);

    test;
  });
  return output;
}


const tokyo = getPossibleCombinations('Abcd');
tokyo;
const kyoto = getPossibleCombinations('Kyoto');
kyoto;

const test = areValuesShared(tokyo, kyoto);
test;

const result = groupWords(input);
result;
// 'abc' -> 'cab', 'bca'
// 'abcd' -> 'dabc', 'cdab', 'bcda'