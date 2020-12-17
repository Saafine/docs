/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  const word = s.trim();
  const words = word.split(' ');
  if (words.length === 1) return words[0].length;
  return words[words.length - 1].length;
};

const result = lengthOfLastWord('a ');
result;
