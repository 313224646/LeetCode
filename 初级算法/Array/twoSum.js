/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = new Array(...nums)
  //arr = arr.filter((item) => item <= target)
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        return [i, j]
      }
    }
  }
};
