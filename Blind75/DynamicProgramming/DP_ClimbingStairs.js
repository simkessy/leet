/* You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step */

let seen = {};
var climbStairs = function(n) {
  // We know what 0,1,2 are
  // 0 = 1
  // 1 = 1
  // 2 = 2
  if (n < 3) return n;

  // check if n is IN seen
  if (!(n in seen)) {
    // Set answer in seen / memoize it
    seen[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return seen[n];
};
