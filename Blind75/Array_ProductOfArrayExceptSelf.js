/* 
238. Product of Array Except Self
Medium

2710

235

Favorite

Share
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

var productExceptSelf = function(nums) {
  // Store results
  let output = [];

  // variable containing what we're multiplying by
  let right = 1;

  // iterate from back to from multiplying and storing rightMulti from last number
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = right;
    right *= nums[i];
  }

  let left = 1;
  for (let j = 0; j < nums.length; j++) {
    output[j] *= left;
    left *= nums[j];
  }

  return output;
};

// Not efficient naive solution
const productExceptSelf = function(nums) {
  return nums.map(function(curr, i, arr) {
    let temp = arr.slice();
    temp.splice(i, 1);
    return temp.reduce((product = 1, num) => product * num);
  });
};
