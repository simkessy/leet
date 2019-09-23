/* 
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let nStart = nums[start];
    let nEnd = nums[end];

    let mid = Math.floor((start + end) / 2);
    let nMid = nums[mid];

    if (target === nMid) return mid;

    if (nStart <= nMid) {
      if (nStart <= target && target < nMid) {
        // if trgt is in between start and mid,  bring end closer
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nMid < target && target <= nEnd) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};
