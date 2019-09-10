/* 
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

 */

var maxProfit = prices => {
  let min = Infinity;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    // Find the smallest price as you move forward
    min = Math.min(min, price);
    // Find the highest between last max and current price minus min
    max = Math.max(max, price - min);
  }
  return max - min;
};

var maxProfit = function(prices) {
  // set min to maximum number so when you do first compare it works
  // Trying to set it to null wouldn't work and typing a really large number like 99999 might not be good enough
  var min = Infinity;
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
    let diffBetweenPriceAndMin = prices[i] - min;
    min = Math.min(min, prices[i]);
    max = Math.max(max, diffBetweenPriceAndMin);
  }
  return max;
};
