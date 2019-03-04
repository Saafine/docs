var test = 'banana';
// minimum number to remove to have banana sorted
// 2nd one https://i.imgur.com/P711t7D.png
// 2 strings: A and B with number of chars M and N respecitvely.
// nice, niece
// you have to return: INSERT, IMPOSSIBLE, REMOVE etc


// !todo [lbs] without mutation ?
function solution(word, idx = 0, removed = 0, totalRemoved = [], wordLen = word.length, removedPreviously = false) {
  if (!idx) {
    word = stringToArrayOfNumbers(word)
  }

  // one letter word
  if (wordLen === 1) {
    return 0;
  }

  // last iteration
  if (idx === wordLen) {
    totalRemoved.push(removed);
    return;
  }

  // stopper
  if (word[idx] < word[idx - 1] && !removedPreviously) {
    return;
  }

  // non-removing branch
  solution(word, idx + 1, removed, totalRemoved, wordLen, false);

  // removing branch
  solution(word, idx + 1, removed + 1, totalRemoved, wordLen, true);

  // recursive ends
  return Math.min(...totalRemoved);
}

function stringToArrayOfNumbers(word) {
  return [...word].map(a => parseInt(a, 36) - 10).filter(a => a >= 0);
}

console.log(solution('banana'));

// console.log(solution(test));
