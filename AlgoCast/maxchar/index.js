// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar2(str) {
  let max = 0;
  let maxChar = "";

  // Set hash table with char count
  let result = str.split("").reduce((result, char) => {
    result[char] = ++result[char] || 1;
    return result;
  }, {});

  // Loop over hashtable and find max
  Object.keys(result).forEach(char => {
    // When max found, store char
    if (result[char] > max) {
      max = result[char];
      maxChar = char;
    }
  });
  // return max char
  return maxChar;
}

// Same as using Object.keys but looks cleaner with for in...
function maxChar(str) {
  let max = 0;
  let maxChar = "";

  // Set hash table with char count
  let result = str.split("").reduce((result, char) => {
    result[char] = ++result[char] || 1;
    return result;
  }, {});

  // Loop over hashtable and find max
  for (let char in result) {
    // When max found, store char
    if (result[char] > max) {
      max = result[char];
      maxChar = char;
    }
  }

  // return max char
  return maxChar;
}

module.exports = maxChar;
