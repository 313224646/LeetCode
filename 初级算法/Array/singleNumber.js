/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      i++;
    } else {
      return nums[i];
    }
  }
  return nums[nums.length - 1];
};