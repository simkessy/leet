/*
    49. Group Anagrams
    Medium

    1991

    128

    Favorite

    Share
    Given an array of strings, group anagrams together.

    Example:

    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
    [
        ["ate","eat","tea"],
        ["nat","tan"],
        ["bat"]
    ]
    Note:
        All inputs will be in lowercase.
        The order of your output does not matter.
*/

var groupAnagrams = function(strs) {
  let map = new Map();
  for (let str of strs) {
    // Get sorted
    const s = str
      .split("")
      .sort()
      .join("");
    // If sorted in map get []
    // if not in map return array
    let l = map.get(s) || [];
    // push value to array
    l.push(str);
    // set updated array in map
    map.set(s, l);
  }
  // return array of values
  return Array.from(map.values());
};
