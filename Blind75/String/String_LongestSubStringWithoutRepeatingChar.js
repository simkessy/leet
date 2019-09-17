/* 

3. Longest Substring Without Repeating Characters
Medium

6299

358

Favorite

Share
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring

*/

// sliding window approach
var lengthOfLongestSubstring = function(s) {
  // test for edge cases
  if (s.length < 1) return s.length;

  // Declare variables
  let start = 0;
  let end = 0;

  // store rolling max
  let max = Number.NEGATIVE_INFINITY;

  // track used letters
  let map = {};

  while (end < s.length) {
    let endLetter = s[end];
    let startLetter = s[start];

    // test map for presence of endLetter
    if (map[endLetter]) {
      //remove first element from map
      map[startLetter] = null;
      // move start forward
      start++;
    } else {
      // new unique letter
      // store in map
      map[endLetter] = true;

      // recalc max
      max = Math.max(max, end - start + 1);

      // increment end
      end++;
    }
  }
  return max;
};
