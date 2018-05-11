/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits, n = digits.length - 1) {
  if (digits[n] + 1 === 10) {
    digits[n] = 0
    if (n == 0) {
      digits.unshift(1)
      return digits
    } else {
      plusOne(digits, n - 1)
    }
  } else {
    digits[n] += 1
  }
  return digits
};