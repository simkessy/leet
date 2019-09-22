/********************************************************
 * CODE INSTRUCTIONS:                                   *
 * 1) The method findInOrderSuccessor you're asked      *
 *    to implement is located at line 26.               *
 * 2) Use the helper code below to implement it.        *
 * 3) In a nutshell, the helper code allows you to      *
 *    to build a Binary Search Tree.                    *
 * 4) Jump to line 94 to see an example for how the     *
 *    helper code is used to test findInOrderSuccessor. *
 * BST Successor Search
In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node with the smallest key greater than the key of the input node (see examples below). Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor that returns the Inorder Successor of inputNode. If inputNode has no Inorder Successor, return null.
 * 
 * 
 * 
 * Let’s denote the Inorder Successor of inputNode as successorNode. To arrive to the solution, we distinguish between two cases:

inputNode has a right child. In this case successorNode would be the node with the minimum key in inputNode's right subtree.

inputNode doesn’t have a right child. In this case successorNode would be one of inputNode's ancestors. More specifically, within inputNode's ancestor chain (starting from inputNode all the way up to the root), successorNode is the first parent that has a left child in that chain.

If inputNode doesn’t have a right child and all of its ancestors are right children to their parents, inputNode doesn’t have a successor (successorNode would be null).

So why is this always true? Well, if inputNode was inserted to the tree prior to successorNode, then since successorNode.key is greater than inputNode.key, but also smaller than all other keys greater than successorNode.key, successorNode has to be in inputNode's right subtree.

Now, if inputNode was inserted to the tree after successorNode was, then since inputNode.key is smaller than successorNode.key, but also larger than all other keys smaller than successorNode.key, inputNode has to be in successorNode's left subtree.


Time Complexity: in both cases where either inputNode has a right child or doesn’t have one, we are visiting only O(H) number of nodes, where H is the height of the BST. For a balanced BST, since H = log(N), where N is the number of nodes in the BST, the time complexity is O(log(N)). For an unbalanced BST, the time complexity is O(N).

Space Complexity: throughout the entire algorithm we used only a constant amount of space, hence the space complexity is O(1).
 ********************************************************/

// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

/*  
inputs: node  (key, parent, left, right)
output : -1 (if not found) || inordeSuccessor 9=11 / 14=20

inorder = [5,9,11,12,14,20,25]
  
1. take root
2. traverse tree in order and return array O(n)
3. given inorder array find indexOf(input.key) O(1)
4. return index+1 || -1 if greater length O(1)

timeComplexity = O(n)
spaceComplexity = O(n)

*/

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  function findMinKey(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // return the node with minimum key in the right subtree
  if (inputNode.right !== null) return findMinKey(inputNode.right);

  let ancestor = inputNode.parent;
  let child = inputNode;

  // # travel up using the parent pointer until you see
  // # a node which is the left child of its parent. The parent
  // # of such a node is successorNode.
  // check if you have a parent && checks if you're on the right side
  while (ancestor !== null && child == ancestor.right) {
    child = ancestor;
    ancestor = child.parent;
  }

  return ancestor;
};

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if (!root) {
    this.root = new Node(key);
    return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert it
  var currentNode = root;
  var newNode = new Node(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};

// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your
// findInOrderSuccessor function on.
BinarySearchTree.prototype.getNodeByKey = function(key) {
  var currentNode = this.root;

  while (currentNode) {
    if (key === currentNode.key) {
      return currentNode;
    }

    if (key < currentNode.key) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return null;
};

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

// Get a reference to the node whose key is 9
var test = bst.getNodeByKey(14);

// Find the in order successor of test
var succ = test ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
if (succ) {
  console.log("Inorder successor of " + test.key + " is " + succ.key);
} else {
  console.log("Inorder successor does not exist");
}
