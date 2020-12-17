const meta = {
  link: 'https://leetcode.com/problems/rotate-array/',
  name: 'Rotate Array',
  tags: ['Rotate Array']
};

const testData = [
  {
    args: [[1,2,3,4,5,6,7], 3],
    output: [5,6,7,1,2,3,4]
  },
  {
    args: [[-1,-100,3,99], 2],
    output: [3,99,-1,-100]
  },
  {
    args: [[1, 2], 1],
    output: [2, 1]
  },
  {
    args: [[1, 2], 3],
    output: [2, 1]
  }
];


function solution(arr, steps) {
  if (steps === arr.length || steps === 0) return arr;
  return steps > arr.length ? rotateArray(arr, reduceSteps(arr.length, steps)) : rotateArray(arr, steps);
}

function rotateArray(arr, steps) {
  return [...arr.slice(-steps), ...arr.slice(0, arr.length - steps)];
}

function reduceSteps(arrayLength, steps) {
  return steps % arrayLength;
}
