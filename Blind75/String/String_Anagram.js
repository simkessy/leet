/* 
242. Valid Anagram
Easy

832

116

Favorite

Share
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

function isAnagram(s, t) {
  const map = {};
  // Buid map of keys and count
  s.split("").map(c => (map[c] = map[c] ? map[c] + 1 : 1));
  // go through map and reduced count on matching keys
  t.split("").map(c => (map[c] = map[c] ? map[c] - 1 : -1));

  //check each key, if they aren't 0, it's not an anagram
  return Object.keys(map).every(k => map[k] === 0);
}

const cleanStr = str => {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
};
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}
