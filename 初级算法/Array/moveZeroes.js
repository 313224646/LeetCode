/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let numsLength = nums.length
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1)
      i--
    }
  }
  numsLength = numsLength - nums.length
  for (let i = 0; i < numsLength; i++) {
    nums.push(0)
  }
};