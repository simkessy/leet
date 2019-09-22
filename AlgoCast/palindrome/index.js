// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome2(str) {
  // check if reversed version is same
  const reversed = str
    .split("")
    .reverse()
    .join("");
  return str === reversed;
}

function palindrome2(str) {
  // Test for strings with 3 or less characters and exit early
  if (str.length <= 3 && str[0] === str[str.length - 1]) return true;

  // check if reversed version is same
  let right = [];
  let left = [];

  let halfLength = Math.floor(str.length / 2);

  // Get right array
  for (let i = 0; i < halfLength; i++) {
    right.push(str[i]);
  }
  // get left array reversed
  for (let j = str.length; j >= halfLength; j--) {
    left.push(str[j]);
  }

  right = right.join("");
  left = left.join("");

  console.log(str, halfLength, right, left, right === left);

  // check if left and right match
  return right === left;
}

// My version
function palindrome(str) {
  // Only loop through half the array
  // The every solution will loop through all which is less efficient
  let halfLength = Math.floor(str.length / 2);

  // Check first and last and move in 1
  for (let i = 0; i < halfLength; i++) {
    // If not a match return false immediately
    if (str[i] !== str[str.length - i - 1]) return false;
  }

  // Otherwise return true :)
  return true;
}

/* function palindrome(str) {
  return str.split("").every((char, idx) => {
    //
    return char === str[str.length - idx - 1];
  });
} */

module.exports = palindrome;
