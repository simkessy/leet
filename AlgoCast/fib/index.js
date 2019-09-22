// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibBruteForce(n) {
  let result = [0, 1];
  let index = 2;

  for (let i = index; i < n + 2; i++) {
    console.log();
    result[index] = result[index - 1] + result[index - 2];
    index++;
  }
  return result[n];
}

const memoize = fn => {
  // store args with result
  const cache = {};

  // return function with args
  return function(...args) {
    // retun results from cache if args previous used
    if (cache[args]) return cache[args];

    // call function and store results in cache
    const result = fn.apply(this, args);
    cache[args] = result;

    // return results
    return result;
  };
};

function fib(n) {
  // Base case
  if (n < 2) return n;

  return fib(n - 2) + fib(n - 1);
}
fib = memoize(fib);

module.exports = fib;
