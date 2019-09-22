// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(d => d.data !== data);
  }
}

class Tree {
  constructor(node) {
    this.root = null;
  }

  traverseBF(cb) {
    let processingArray = [this.root];

    while (processingArray.length) {
      let node = processingArray.shift();
      //Take children - add to end or process
      // for (const child of node.children) {
      //   processingArray.push(child);
      // }

      processingArray.push(...node.children);
      // processingArray = [...processingArray, ...node.children];

      // Transform current
      cb(node);
    }
  }

  traverseDF(cb) {
    let processingArray = [this.root];

    while (processingArray.length) {
      let node = processingArray.shift();
      // Test if elemenet has children
      //Take children - add to Start or process
      // for (const child of node.children) {
      //   processingArray.unshift(child);
      // }

      //   processingArray.unshift(...node.children);
      processingArray = [...node.children, ...processingArray];

      // Transform current
      cb(node);
    }
  }
}

module.exports = { Tree, Node };
