/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var profit = 0;
  var diffs = 0;
  for (var i = 0; i < prices.length - 1; i++) {
    diffs = prices[i + 1] - prices[i];
    if (diffs > 0) {
      profit += diffs;
    }
  }
  return profit;
};