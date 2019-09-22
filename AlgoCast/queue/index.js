// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Return first val
  //   [1,2,3,4,5]
  remove() {
    // if there isn't any
    if (this.size === 0) return undefined;
    // get first
    const removed = this.first;

    // Check if there's only 1 item and they're the same
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      //set removed.next as new head
      this.first = removed.next;
    }

    // update size
    this.size--;
    // Return val
    return removed.val;
  }

  // Add to last
  add(val) {
    // Create node
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
  }

  // Return second last item or undefined
  peek() {
    // if empty
    return this.last.val;
  }
}

// You can build using an array but it's less efficient
class QueueBad {
  constructor() {
    this.data = [];
  }

  add(val) {
    this.data.unshift(val);
  }

  remove() {
    return this.data.pop();
  }

  // Return second last item
  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
