/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numsSet = new Set(nums)
  if (numsSet.size === nums.length) {
    return false
  } else {
    return true
  }
};