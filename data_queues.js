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

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //  Add new node to end
      this.last.next = newNode;
      // Set new node as last
      this.last = newNode;
    }

    return this.size++;
  }

  dequeue() {
    if (!this.first) return null;
    let removed = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removed.next;
    }

    this.size--;
    return removed.val;
  }
}
