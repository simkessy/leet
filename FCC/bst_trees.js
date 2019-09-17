class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    let node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        // if data less, we're dealing with the left side
        if (data < node.data) {
          // check if there's a left
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            // recurse through left
            // until null is reached
            // set new node when null found
            return searchTree(node.left);
          }
        }
        // test if should be on right side
        else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          } else {
            // if data equal - don't add data to tree
            return null;
          }
        }
      };

      // start with root and traverse through it
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;

    // the smallest number in a BST is on the lowest left end
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  findMax() {
    let current = this.root;

    // the smallest number in a BST is on the lowest left end
    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  find(data) {
    let current = this.root;

    while (current) {
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return current;
  }
  isPresent(data) {
    let current = this.root;

    while (current) {
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) return null;

      // if found
      if (data === node.data) {
        // if node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // no left children
        if (node.left === null) {
          return node.right;
        }

        // node has no right children
        if (node.right === null) {
          return node.left;
        }

        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  findMinHeight(node = this.root) {
    if (node === null) return -1;

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
}

const bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));
