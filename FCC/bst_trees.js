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
          }
        }
        // data matches
        else {
          // if data equal - don't add data to tree
          return null;
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

    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
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
    if (node === null) return 0;

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    return 1 + Math.min(left, right);
  }

  findMaxHeight(node = this.root) {
    if (node === null) return 0;

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    return 1 + Math.max(left, right);
  }

  // start from left side
  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      var result = [];

      let traverseInOrder = node => {
        // if there's a left, recurse over left side
        node.left && traverseInOrder(node.left);
        // push left value to result
        result.push(node.data);
        // then push rights
        node.right && traverseInOrder(node.right);
      };

      traverseInOrder(this.root);
      return result;
    }
  }

  // preorder explores root nodes before leaves
  preOrder() {
    if (this.root === null) {
      return null;
    } else {
      var result = [];

      let traverseInOrder = node => {
        // push top
        result.push(node.data);
        // if there's a left, recurse over left side
        node.left && traverseInOrder(node.left);
        // then recurse over right side
        node.right && traverseInOrder(node.right);
      };

      traverseInOrder(this.root);
      return result;
    }
  }

  // post order explores leaf nodes before the root
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  // does each row by row
  levelOrder() {
    let result = [];
    let Q = [];

    if (this.root === null) return null;

    Q.push(this.root);

    while (Q.length > 0) {
      let node = Q.shift();
      result.push(node.data);
      if (node.left != null) {
        Q.push(node.left);
      }
      if (node.right != null) {
        Q.push(node.right);
      }
    }
    return result;
  }
}
const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log("inOrder: " + bst.inOrder());
console.log("preOrder: " + bst.preOrder());
console.log("postOrder: " + bst.postOrder());

console.log("levelOrder: " + bst.levelOrder());
