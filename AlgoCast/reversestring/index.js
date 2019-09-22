// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// Use a loop an push to a new array backwards
// Don't forget arr.length-1
function reverse2(str) {
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr.join("");
}

function reverse(str) {
  let reversed = "";

  for (let ltr of str) {
    //   Keep adding the last letter to the front
    reversed = ltr + reversed;
  }

  return reversed;
}

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

reverse("asdfasdfas");
module.exports = reverse;
