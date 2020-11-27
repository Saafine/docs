const meta = {
  link: 'https://www.codewars.com/kata/good-vs-evil/train/javascript',
  name: 'Good vs Evil',
  tags: ['simple', 'combining reducers']
};

export const testData = [
  {
    args: ['1 1 1 1 1 1', '1 1 1 1 1 1 1'],
    output: 'Battle Result: Evil eradicates all trace of Good'
  },
  {
    args: ['0 0 0 0 0 10', '0 1 1 1 1 0 0'],
    output: 'Battle Result: Good triumphs over Evil'
  },
  {
    args: ['1 0 0 0 0 0', '1 0 0 0 0 0 0'],
    output: 'Battle Result: No victor on this battle field'
  }
];

export function solution(goodArmy, evilArmy) {
  const GOOD_WORTH = [1, 2, 3, 3, 4, 10];
  const EVIL_WORTH = [1, 2, 2, 2, 3, 5, 10];

  const worthReducer = (army) => (worth, soldierValue, idx) => worth + Number(soldierValue) * army[idx];
  const getArmyWorth = (army, armyWorth) => army.split(' ').reduce(worthReducer(armyWorth), 0);

  const goodArmyWorth = getArmyWorth(goodArmy, GOOD_WORTH);
  const evilArmyWorth = getArmyWorth(evilArmy, EVIL_WORTH);

  if (goodArmyWorth > evilArmyWorth) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (goodArmyWorth < evilArmyWorth) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else {
    return 'Battle Result: No victor on this battle field';
  }
}
