/* 
    268. Missing Number
    Easy

    1085

    1478

    Favorite

    Share
    Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

    Example 1:

    Input: [3,0,1]
    Output: 2
    Example 2:

    Input: [9,6,4,2,3,5,7,0,1]
    Output: 8
    Note:
    Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

var missingNumber = function(nums) {
  nums = nums.sort((a, b) => a - b);
  if (nums[0] !== 0) return 0;

  for (i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let next = nums[i + 1];
    if (next !== cur + 1) return cur + 1;
  }
};

// Use the indices to keep track of what the told should be
// Adjust for index = 0
var missingNumber2 = function(nums) {
  let sum = 0,
    total = 0;
  // get count of numbers
  // get indice total
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
};
