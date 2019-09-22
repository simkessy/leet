// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

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

function anagrams1(stringA, stringB) {
  // clean strings from spaces, turn into array and sort
  stringA = cleanStr(stringA);
  stringB = cleanStr(stringB);

  console.log(stringA, stringB);
  // If length not same exit
  if (stringA.length !== stringB.length) return false;

  // Compare each character --- THIS IS DUMB JUST RETURN WHETHER THE STRINGS MATCH
  for (let i = 0; i < stringA.length; i++) {
    // If they aren't the same return false
    if (stringA[i] !== stringB[i]) return false;
  }

  // If loop doesn't find different, return true
  return true;
}

function anagrams2(stringA, stringB) {
  // Remove spaces and special characters
  stringA = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("");
  stringB = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("");

  // create two hash maps

  let aMap = stringA.reduce((result, char) => {
    result[char] = ++result[char] || 1;
    return result;
  }, {});

  let bMap = stringB.reduce((result, char) => {
    result[char] = ++result[char] || 1;
    return result;
  }, {});

  // If number of keys is not the same then we don't have anagram
  if (Object.keys(stringA).length !== Object.keys(stringB).length) return false;

  // Test if keys match despite same number
  for (const key of Object.keys(aMap)) {
    if (!bMap[key]) return false;
  }

  console.log(aMap, bMap);
  // Loop over each key and make sure there's an equal value
  // if count is not equal then return false
  for (const char in aMap) {
    if (aMap[char] !== bMap[char]) return false;
  }

  return true;
}

function anagrams3(stringA, stringB) {
  const charMap = str => {
    return str.reduce((result, char) => {
      result[char] = ++result[char] || 1;
      return result;
    }, {});
  };

  const cleanStr = str => {
    return str
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("");
  };

  let aMap = charMap(cleanStr(stringA));
  let bMap = charMap(cleanStr(stringB));

  // If number of keys is not the same then we don't have anagram
  if (Object.keys(aMap).length !== Object.keys(bMap).length) return false;

  console.log(aMap, bMap);
  // Loop over each key and make sure there's an equal value
  // if count is not equal then return false
  for (const char in aMap) {
    if (aMap[char] !== bMap[char]) return false;
  }

  return true;
}
module.exports = anagrams;
