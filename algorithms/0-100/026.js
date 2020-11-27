const meta = {
  link: 'https://www.codewars.com/kata/snail/train/javascript?fbclid=IwAR3ZWuoLyJ1NPh0Lc-qL3OcOFQkJDywyxXfCJ6HfgTbmzK5XnXyih-WS3Pw',
  name: 'Snail',
  tags: ['Snaking through arrays']
};

const testData = [
  {
    args: [
      [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]
      ]
    ],
    output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    args: [
      [
        [1, 2, 3, 1],
        [4, 5, 6, 4],
        [7, 8, 9, 7],
        [7, 8, 9, 7]
      ]
    ],
    output: [1, 2, 3, 1, 4, 7, 7, 9, 8, 7, 7, 4, 5, 6, 9, 8]
  }
];

function snail(arr, go = 'RIGHT', visits = []) {
  if (!arr.length) return visits;

  switch (go) {
    case('RIGHT'):
      visits.push(...arr[0]);
      arr.splice(0, 1);
      return snail(arr, 'BOTTOM', visits);
    case('BOTTOM'):
      for (let x = 0; x < arr.length; x++) {
        visits.push(...arr[x].splice(arr[x].length - 1));
        if (!arr[x].length) arr.splice(x, 1);
      }
      return snail(arr, 'LEFT', visits);
    case('LEFT'):
      const left = arr[arr.length - 1].reverse();
      visits.push(...left);
      arr.splice(arr.length - 1, 1);
      return snail(arr, 'TOP', visits);
    case('TOP'):
      for (let x = arr.length - 1; x >= 0; x--) {
        visits.push(...arr[x].splice(0, 1));
        if (!arr[x].length) arr.splice(x, 1);
      }
      return snail(arr, 'RIGHT', visits);
  }
}

/**
 * Other solutions
 */
snail2 = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}

function snail3(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
}
