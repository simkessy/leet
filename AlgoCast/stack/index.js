// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
  }
  // add item to head
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.last = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }

    this.size++;
  }

  // remove item from head
  pop() {
    if (!this.head) return undefined;

    let removed = this.head;

    // If there's only 1 item clean up last
    if (this.head === this.last) {
      this.last = null;
    }

    this.head = removed.next;

    this.size--;
    removed.next = null;
    return removed.val;
  }

  // return head without removing
  peek() {
    if (!this.head) return undefined;

    return this.head.val;
  }
}

class StackSimple {
  constructor() {
    this.data = [];
  }

  push(val) {
    this.data.push(val);
  }

  pop() {
    this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
// stack = StackSimple;
module.exports = Stack;
