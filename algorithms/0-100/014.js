const meta = {
  link: 'https://www.hackerrank.com/challenges/the-birthday-bar/problem?fbclid=IwAR0OLpmmQ9QuOuiT1cVJysFATJbRWuFmt9rIfLQctxuXM-KRZWMvrmjdQsE',
  name: '',
  tags: ['consecutive numbers summed', 'operation on numbers', 'summing']
};

export const testData = [
  {
    args: [
      [1, 2, 1, 3, 2],
      3,
      2
    ],
    output: 2
  },
  {
    args: [[1, 1, 1, 1, 1, 1], 3, 2],
    output: 0
  },
  {
    args: [[4], 4, 1],
    output: 1
  }
];

/**
 * @param s ( 1 <= arr[i] <= 5 where (0 <= i < n)
 * @param d sum of squares ( 1 <= d <= 31 )
 * @param m consecutive squares ( 1 <= m <= 12 )
 * @returns {number}
 */
export function solution(s, d, m) {
  if (s.length < m) return 0;
  const combinations = s.length - m + 1;

  let previousSum = Array(m).fill(null).reduce((sum, _, idx) => {
    return sum + s[idx];
  }, 0);
  let matches = previousSum === d ? 1 : 0;

  for (let x = 1; x < combinations; x++) {
    previousSum = previousSum - s[x - 1] + s[x + m - 1];
    if (previousSum === d) matches++;
  }

  return matches;
}

