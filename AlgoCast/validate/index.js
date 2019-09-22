// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  console.log(node.data, "min", min, "max", max);
  if (max !== null && node.data > max) return false;
  if (min !== null && node.data < min) return false;

  // Check if there's a left node
  // Check if left node is less than parent
  // if not - check again but up update max
  if (node.left && !validate(node.left, min, node.data)) return false;

  // Check if there's a right node
  // Check if right node is less than parent
  // if not - check again but up update min
  if (node.right && !validate(node.right, node.data, max)) return false;

  return true;
}

module.exports = validate;
