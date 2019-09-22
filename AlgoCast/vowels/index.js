// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels1(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  str
    .toLowerCase()
    .split("")
    .forEach(letter => {
      if (vowels.includes(letter)) count++;
    });

  return count;
}

function vowels2(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  //   You can use includes with strings, neat
  for (const letter of str.toLowerCase()) {
    if (vowels.includes(letter)) count++;
  }

  return count;
}

function vowels(str) {
  // [anyting inside]
  // g - don't stop are first
  // i - case insensitive
  // match returns [] or null
  const matches = str.match(/[aeiou]/gi).length;

  return matches ? matches.length : 0;
}
module.exports = vowels;
