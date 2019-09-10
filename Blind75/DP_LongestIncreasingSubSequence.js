/* 
300. Longest Increasing Subsequence
Medium

2928

69

Favorite

Share
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/

var lengthOfLIS = function(nums) {
  // check for empty
  // if 0 return 0 if 1 return 1
  if (nums.length <= 1) return nums.length;

  // create a results array
  // Fill it with 1 because default step to get to next sequence
  let results = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    // By making the terminate j < i
    // you're moving i ahead of j
    // So you want to check that nums[i] is less than nums[j]
    for (let j = 0; j < i; j++) {
      console.log(i, j);
      // if latest number lower then prev, we have inc sequence
      // Determine if it's a max sequence if current sequence larger
      // Store in current position of results
      if (nums[j] < nums[i]) {
        // At position i you want to make sure that max
        // is between current value and sequence is set plus 1
        results[i] = Math.max(results[i], results[j] + 1);
      }
    }
  }

  return Math.max(...results);
};

// lengthOfLIS([10,9,2,5,3,7,101,18])
//  [1, 1, 1, 2, 2, 3, 4, 4]
