/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let index = 0
  let number = []
  for (item of nums1) {
    index = nums2.indexOf(item)
    if (index >= 0) {
      number.push(nums2[index])
      nums2.splice(index, 1)
    }
  }
  return number
};
