/* 
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/
var maxSubArray = function(nums) {
  let max = -Infinity;
  let prev = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    // Compare the sum of prev with next
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(prev, max);
  }
  return max;
};
// If you've noticed, we only needed to worry about the previous max value at each index of the array, so we don't need to keep track of every max at each instance for this function.

//By just storing the previous maximum for each element, we can check the currentMax like we have been in the previous examples and set the max accordingly. This solution retain the O(n) time complexity, but removes the necessity for keeping track of every element we come across.

var maxSubArray = function(nums) {
  // start at 1 because you don't have anything to add to index = 0
  for (let i = 1; i < nums.length; i++) {
    // max current number vs curr + prev
    // so all results in nums as you add up in place (DP)
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};
