// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// SIMPLER SOLUTION
function steps2(n) {
  // Create array with n needed and fill with spaces
  let stepArr = new Array(n).fill(" ");
  // Loop over each element
  stepArr.forEach((val, idx) => {
    // Using index you can add # incrementatlly
    stepArr[idx] = "#";

    // Join array
    console.log(stepArr.join(""));
  });
}

function steps1(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

function steps(n, row = 0, stair = "") {
  // Base case when n = row we're done
  if (n === row) return;

  // When the string hit's the length it needs, log and move to next iteration / row
  if (n === stair.length) {
    console.log(stair);
    // Now we're on row + 1
    return steps(n, row + 1);
  }

  // Build string  until you hit n
  //   if (stair.length <= row) {
  //     stair += "#";
  //   } else {
  //     stair += " ";
  //   }

  const add = stair.length <= row ? "#" : " ";

  steps(n, row, stair + add);
}
// steps(3)
//  n=3 row=0 stair=""
// stair = "#
//steps(3, 0, "#")
//stair = "# "
// steps (3,0, "# ")
//...
//steps(3,0, "#  ")
// stair.length 3===n 3
// log("#   ")

module.exports = steps;
