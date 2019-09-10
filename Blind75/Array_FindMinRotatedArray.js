/* 
153. Find Minimum in Rotated Sorted Array
Medium

1195

179

Favorite

Share
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
*/
var findMin = function(nums) {
  if (nums.length === 1) return nums[0];

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let nStart = nums[start],
      nEnd = nums[end];

    if (nStart < nEnd) return nStart;

    // Call mid point
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] >= nStart) {
      // Move it past mid by 1
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start];
};
