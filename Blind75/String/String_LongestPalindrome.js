/* 
    5. Longest Palindromic Substring
    Medium

    4278

    396

    Favorite

    Share
    Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

    Example 1:

    Input: "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.
    Example 2:

    Input: "cbbd"
    Output: "bb"
*/

var longestPalindrome = function(s) {
  if (s.length < 1) return s;

  let max = "";

  for (let i = 0; i < s.length; i++) {
    // This inner look is used to test between even an odd palandromes
    // Ex: "ababa" i=1 j=0 left=1 right=1 a=a=true
    // Ex: "abba" i=1 j=1 left=1 right=2  b=b=true
    for (let j = 0; j < 2; j++) {
      // set pointers
      let left = i;
      let right = j + i;

      // loop while left in range and left / right match
      while (s[left] && s[left] === s[right]) {
        // as they match adjust points
        left--;
        right++;
      }

      // once loop is done and no more match
      // check if new range larger than last
      if (right - left - 1 > max.length) {
        max = s.slice(left + 1, right);
      }
    }
  }

  return max;
};
