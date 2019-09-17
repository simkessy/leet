/* 322. Coin Change
Medium

2180

82

Favorite

Share
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
 */

// Bottom up approach
var coinChange = function(coins, amount) {
  // create array given length of amt
  // We're looking for min coins needed for each element
  // So we set  MAX so min has something to compare to
  let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  // set known val at 0
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    coins.forEach(coin => {
      // Test is the coin fits inside current i
      if (i - coin >= 0) {
        // Yea, the current coin fits inside i
        // Check if the current coin fits less times then the last coin
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    });
  }

  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
