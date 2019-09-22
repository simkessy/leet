// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // use s to determine you've hit the end of a level
  let arr = [root, "s"];
  // track count for each level
  let counters = [0];

  while (arr.length > 1) {
    // take first node
    const node = arr.shift();

    // check if it's end of level
    if (node === "s") {
      // add new counter
      counters.push(0);
      // move indicator to back
      arr.push("s");
    } else {
      // push children to back
      arr.push(...node.children);
      //   update last counter
      counters[counters.length - 1]++;
    }
  }

  // return counters
  return counters;
}

module.exports = levelWidth;
