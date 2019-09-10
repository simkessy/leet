/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. 
*/

var twoSum = function(nums, target) {
  // store difference between target and item in array
  let results = {};

  // loop over array
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    // store that in results
    // if result[target-difference] is undefined
    if (results[current] >= 0) {
      // Store index were difference was found
      return [results[current], i];
    }
    // Return [location where difference was stored, current location]
    // both values add to target
    results[target - current] = i;
  }
};
