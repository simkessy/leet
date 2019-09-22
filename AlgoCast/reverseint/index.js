// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// This works but it's pretty ugly
// Essentailly, remove trailing 0
// Remove negative but store if it is negative
// Then reverse
// If it is negative add back the minus symbol and return
// If not, just return the number
// Cast to string in between to manipulate, then cast back to number

function reverseInt2(n) {
  // Remove trailing 0
  n = String(n).split("")[n.length - 1] === 0 ? n.splice(n.length - 1, 1) : n;

  // Remove negative
  let isNegative = false;
  if (String(n)[0] === "-") {
    console.log("IS NEGATIVE", String(n));
    n = String(n).slice(1);
    isNegative = true;
  }

  let numString = String(n)
    .split("")
    .reduce((reversed, num) => {
      return num + reversed;
    }, "");

  if (isNegative) {
    console.log("TEST:", "-" + numString);
    return Number("-" + numString);
  } else {
    return Number(numString);
  }
}

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}
module.exports = reverseInt;
