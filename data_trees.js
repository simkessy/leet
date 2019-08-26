class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //    Insert - new number into tree in correct position
  insert(val) {
    // Create new node
    let newNode = new Node(val);

    // If there's no root, set new node as root
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // Start with the root
    let current = this.root;

    // Whille true will run until it hits a return statement
    while (true) {
      // We don't care about duplicates
      // However we could keep a frequency count using hash table
      if (val === current.val) return undefined;

      // Check if value is less than current
      if (val < current.val) {
        // If there's no left node, set newNode and return tree
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        // If there is a left node, update the current and repeat
        current = current.left;
      } else {
        // If there's no right node, set newNode and return tree
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        // If there is a right node, update the current and repeat
        current = current.right;
      }
    }
  }

  // Search - find value and return true or false
  find(val) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    // Current will hit undefied once it gets to a leaf.
    // ie: leaf.left or leaf.right = null
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    // Return false when node has no value ( there is no node)
    if (!found) return false;
  }
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log("search: ", tree.find(16));
console.log("search: ", tree.find(5));
console.log("search: ", tree.find(123));
console.log(JSON.stringify(tree, null, 2));

/*           10
        5           13
     2    7     11     16
 */
