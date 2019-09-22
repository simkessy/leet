// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramidBruteForce(n) {
  // Bail on first if n=1
  if (n === 1) return "#";

  // Starting index
  let index = 0;

  // Find middle
  let midPoint = Math.floor((n * 2 - 1) / 2);

  // Loop until n reached
  while (index < n) {
    // create row given lenfth of n
    let row = new Array(n * 2 - 1).fill(" ");

    // Set mid value
    row[midPoint] = "#";

    // Spread out left / right based on mid and index
    let leftPoint = midPoint - 1;
    let rightPoint = midPoint + 1;
    let leftMin = midPoint - index;
    let rightMax = midPoint + index;

    // Add you spread out, fill in spots
    // Continue until min/max reached for row
    while (leftPoint >= leftMin && rightPoint <= rightMax) {
      row[leftPoint] = "#";
      row[rightPoint] = "#";

      // Update left/right
      leftPoint--;
      rightPoint++;
    }
    // console.log("Numbers", leftMin, leftPoint, midPoint, rightPoint, rightMax);
    // Update index
    index++;

    // Log out row
    console.log(row.join(""));
  }
}

function pyramidRecurr(n, row = 0) {
  if (n === 1) return "#";
  if (row >= n) return;
  // Find middle
  let midPoint = Math.floor((n * 2 - 1) / 2);
  // create row given lenfth of n
  let arrRow = new Array(n * 2 - 1).fill(" ");

  // Set mid value
  arrRow[midPoint] = "#";

  // Spread out left / right based on mid and index
  let leftPoint = midPoint - 1;
  let rightPoint = midPoint + 1;
  let leftMin = midPoint - row;
  let rightMax = midPoint + row;

  while (leftPoint >= leftMin && rightPoint <= rightMax) {
    arrRow[leftPoint] = "#";
    arrRow[rightPoint] = "#";

    // Update left/right
    leftPoint--;
    rightPoint++;
  }

  console.log(arrRow.join(""));
  pyramid(n, row + 1);
}

function pyramid(n, row = 0, level = "") {
  if (row === n) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midPoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  console.log(midPoint - row, midPoint + row, "row", row, level, level.length);
  pyramid(n, row, level + add);
}

module.exports = pyramid;

// n=1 = 1 space
// n=2 = 3 space
// n=3 = 5 space
// n=4 = 7 space
// n=5 = 9 space
// space = (r*2)-1
// +2 per row

//      #       n5 > i=0 > mid=4 min= mid-i max= mid+i
//     ###      n5 > i=1 > mid=4 min= mid-i max= mid+i
//    #####     n5 > i=1 > mid=4 min= mid-i  max= mid+i
//   #######    n5 > i=2 > mid=4 min= mid-i  max= mid+i
//  #########   n5 > i=3 > mid=4 min= mid-i  max= mid+i

// n3 = 5spaces

//      #
//     ###
//    #####
