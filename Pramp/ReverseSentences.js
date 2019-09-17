function reverseWords(arr) {
  // reverse all characters
  let n = arr.length;
  mirrorReverse(arr, 0, n - 1);
  // console.log("firstpass:", arr);
  // reverse each word
  let wordStart = null;
  for (let i = 0; i <= n; i++) {
    if (arr[i] === " ") {
      if (wordStart !== null) {
        mirrorReverse(arr, wordStart, i - 1);
        wordStart = null;
      }
    } else if (i === n - 1) {
      if (wordStart !== null) {
        mirrorReverse(arr, wordStart, i);
      }
    } else {
      if (wordStart == null) {
        wordStart = i;
      }
    }
  }

  console.log("arr:", arr);
  return arr;
}

// helper function - reverses the order of items in arr
// please note that this is language dependent:
// if are arrays sent by value, reversing should be done in place

function mirrorReverse(arr, start, end) {
  let temp = null;

  while (start < end) {
    temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    start++;
    end--;
  }
}

var input = [
  "y",
  "o",
  "u",
  " ",
  "w",
  "i",
  "t",
  "h",
  " ",
  "b",
  "e",
  " ",
  "f",
  "o",
  "r",
  "c",
  "e",
  " ",
  "t",
  "h",
  "e",
  " ",
  "m",
  "a",
  "y"
];

console.clear();
reverseWords(input);

module.exports = reverseWords;
