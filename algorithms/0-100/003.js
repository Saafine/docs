const inputs = [
  {
    arguments: [[1, 3, 5, 6], 5],
    output: 2
  },
  {
    arguments: [[1, 3], 2],
    output: 1
  },
  {
    arguments: [[1, 3, 5], 4],
    output: 2
  },
  {
    arguments: [[1, 3, 5, 6], 7],
    output: 4
  }
];

const [arr, target] = inputs[3].arguments;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  const numLen = nums.length;
  if (target > nums[numLen - 1]) return numLen; // last element bigger than target

  for (let x = 0; x < numLen; x++) {
    const value = nums[x];
    if (value === target) return x;
    if (target < value) return x;
  }
};

const result = searchInsert(arr, target);
result;
