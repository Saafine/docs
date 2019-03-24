const meta = {
  link: 'https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript',
  name: 'Sum of Intervals',
  tags: ['sets', 'ranges']
};

export const testData = [
  {
    args: [[
      [1, 2],
      [6, 10],
      [11, 15]
    ]],
    output: 9
  },
  {
    args: [[
      [1, 4],
      [7, 10],
      [3, 5]
    ]],
    output: 7
  },
  {
    args: [[
      [1, 5],
      [10, 20],
      [1, 6],
      [16, 19],
      [5, 11]
    ]],
    output: 19
  }
];

function solution(intervals) {
  return intervals
    .sort((a, b) => a[0] > b[0])
    .reduce((acc, cur, idx) => {
    if (idx === 0) {
      acc.push(cur);
      return acc;
    }

    const prev = acc[acc.length - 1];

    if (prev[1] >= cur[0]) {
      prev[0] = Math.min(prev[0], cur[0]);
      prev[1] = Math.max(prev[1], cur[1]);
    } else {
      acc.push(cur);
    }

    return acc;
  }, [])
    .reduce((acc, cur) => acc + (cur[1] - cur[0]), 0);
}


// Other solutions
// --------------------
function sumIntervals(intervals){
  const set = new Set();
  intervals.forEach((ele)=>{
    for(let i=ele[0]; i<ele[1]; i++){
      set.add(i);
    }
  });
  return set.size
}

