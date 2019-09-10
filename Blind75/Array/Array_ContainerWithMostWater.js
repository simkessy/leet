/* 
11. Container With Most Water
Medium

3883

470

Favorite

Share
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

 
The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

var maxArea = function(height) {
  let max = Number.NEGATIVE_INFINITY;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    // find min between the two numbers
    // use min because we can't be slanted
    let min = Math.min(height[start], height[end]);
    // set max between prev and current area
    // Test that the max before is still larger than the current calculated value
    max = Math.max(max, min * (end - start));

    // move based on which is smaller towards inside
    // You want to keep the highest height at the start to increase the distance
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return max;
};
