/* 
76. Minimum Window Substring
Hard

2731

181

Favorite

Share
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

function minWindow(s, t) {
  if (s.length === 0 || t.length === 0) return "";

  let start = 0;
  let end = -1; // not sure why minus 1 yet

  // the min substring containing t
  let ans = "";

  // generate a map of t letters and count
  let map = t.split("").reduce((map, letter) => {
    map[letter] = map[letter] ? ++map[letter] : 1;
    return map;
  }, {});
  // count how many items we have in map
  let count = [...new Set(t.split(""))].length;

  // loop until end hits length of s
  while (end < s.length) {
    // if count = 0
    // we've found all letters in map
    if (count === 0) {
      // check if we have an answer
      // or if the current window is less than the answer we currently have
      // not sure why +1 yet
      if (ans === "" || end - start + 1 < ans.length)
        ans = s.slice(start, end + 1);
      // check if start letter is in hash
      // if value in map, update count since we found another
      if (map[s[start]] !== undefined) map[s[start]]++;
      // If the value if found in the map, increate count
      if (map[s[start]] > 0) count++;
      // move start position
      start++;
    }
    // we're still looking for letters in the map
    else {
      // Move right
      end++;
      // check if right value is in hash
      // If it's in hash, reduce count
      if (map[s[end]] !== undefined) map[s[end]]--;
      // If it's the last interation we need reduce count
      if (map[s[end]] === 0) count--;
    }
  }

  // return min substring containing t
  return ans;
}
