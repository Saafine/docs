// Given nums = [3,2,2,3], val = 3,
// should return [3,3]


const arrTest = [0,1,2,2,3,0,4,2];
const varTest = 2;
// should return [0,1,4,0,3]


const solution = function(nums, val) {
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] === val) {
      nums.splice(x, 1);
      x--;
    }
  }
};

solution(arrTest, varTest);
arrTest;
