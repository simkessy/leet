/* 
    125. Valid Palindrome
    Easy

    683

    2013

    Favorite

    Share
    Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

    Note: For the purpose of this problem, we define empty string as valid palindrome.

    Example 1:

    Input: "A man, a plan, a canal: Panama"
    Output: true
    Example 2:

    Input: "race a car"
    Output: false
*/

var isPalindrome = function(s) {
  if (s.length === 0) return true;

  // map both

  s = s.toLowerCase().replace(/[^\w]/gi, "");

  let mid = Math.floor(s.length / 2);

  for (let i = 0; i < mid; i++) if (s[i] !== s[s.length - 1 - i]) return false;

  return true;
};

function palindrome2(str) {
  // check if reversed version is same
  const reversed = str
    .split("")
    .reverse()
    .join("");
  return str === reversed;
}
