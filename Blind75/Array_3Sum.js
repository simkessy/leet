/* 
    Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

    Note:

    The solution set must not contain duplicate triplets.

    Example:

    Given array nums = [-1, 0, 1, 2, -1, -4],

    A solution set is:
    [
    [-1, 0, 1],
    [-1, -1, 2]
    ]
*/

var threeSum = function(nums) {
  let target = 0;
  let results = [];

  // If you don't have 3 items in array return nothing
  if (nums.length < 3) return results;

  // sort array
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // You can't use equal because it will ignore target
    if (nums[i] > target) break;

    // if current num and prev are same skip because we need unique triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // two pointer approach starting with j after i and k at end
    let j = i + 1;
    let k = nums.length - 1;

    // stop when j reaches k
    while (j < k) {
      // get sum of 3 numbers
      let sum = nums[i] + nums[j] + nums[k];

      // if target reached
      if (sum === target) {
        // push result
        results.push([nums[i], nums[j], nums[k]]);
        // move j and k until the numbers don't match because we want unique values
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        // push 1 more time because to land on new value
        j++;
        k--;
      } else if (sum < target) {
        // if target not reached but sum is less than target, we need higher number
        // move forward to get to higher number
        j++;
      } else {
        // if sum too high we need lower number, move to next smallest number
        k--;
      }
    }
  }
  return results;
};
