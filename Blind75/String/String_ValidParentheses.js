/* 

    20. Valid Parentheses
    Easy

    3318

    155

    Favorite

    Share
    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

    Example 1:

    Input: "()"
    Output: true
    Example 2:

    Input: "()[]{}"
    Output: true
    Example 3:

    Input: "(]"
    Output: false
    Example 4:

    Input: "([)]"
    Output: false
    Example 5:

    Input: "{[]}"
    Output: true

*/

var isValid = function(s) {
  if (s.length == 0) return true;

  let stack = [];

  let map = new Map();

  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  for (letter of s.split("")) {
    if (map.get(letter)) {
      stack.push(map.get(letter));
    } else {
      if (letter !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};
