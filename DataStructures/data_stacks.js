class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push - Add value to start of stack
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }

    return this.size++;
  }

  // pop - remove from beginning
  pop() {
    if (!this.first) return null;

    let removed = this.first;

    if (this.first === this.last) {
      this.last = null;
      // why not set this.first = null?
    }

    // It's possible that removed.next === null
    // Therefore the first line in put will return null
    // So there's no need to set this.first = null in the if condition
    this.first = removed.next;

    this.size--;

    return removed.val;
  }
}
var stack = new Stack();
