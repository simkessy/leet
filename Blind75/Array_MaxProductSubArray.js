/* 
152. Maximum Product Subarray
Medium

2473

114

Favorite

Share
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

var maxProduct = function(nums) {
  // test length
  if (!nums && !nums.length) return nums;

  const n = nums.length;

  // track prev max (can change with times a negative)
  let prevMax = nums[0];
  // track min because small -min times large -min = large positive
  let prevMin = nums[0];
  // rolling max as you iterate
  let maxSoFar = nums[0];

  for (let i = 1; i < n; i++) {
    // choices:
    // 1) prevMax * nums[i], - maybe previous large times another large is bigger
    // 2) nums[i],  - maybe current number larger than prev products
    // 3) prevMin * nums[i] - maybe prev min * large negative will b large positive
    let localMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]);
    let localMin = Math.min(prevMax * nums[i], nums[i], prevMin * nums[i]);

    // max and min could have swapped
    prevMax = Math.max(localMax, localMin);
    prevMin = Math.min(localMax, localMin);

    maxSoFar = Math.max(maxSoFar, prevMax);
  }

  return maxSoFar;
};
