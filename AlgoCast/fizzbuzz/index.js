// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// function fizzBuzz(n) {
//   // Set a sub function to print
//   const print = n => {
//     if (n % 5 === 0 && n % 3 === 0) console.log("fizzbuzz");
//     else if (n % 5 === 0) console.log("buzz");
//     else if (n % 3 === 0) console.log("fizz");
//     else console.log(n);
//   };

//   // start index at 1 because the question doesn't care about 0
//   let index = 1;

//   // While index is less than n+1 (>6)
//   while (index < n + 1) {
//     // call sub function with current number
//     print(index);
//     // increment
//     index++;
//   }
// }

// Just use a straight forward loop, no need for while or submethod
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) console.log("fizzbuzz");
    else if (i % 5 === 0) console.log("buzz");
    else if (i % 3 === 0) console.log("fizz");
    else console.log(i);
  }
}

module.exports = fizzBuzz;
