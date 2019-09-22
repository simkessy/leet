// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(val) {
    // this.head = new Node(val, this.head);
    this.insertAt(val, 0);
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      count++;
    }

    return count;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) return null;

    // let last = this.head;
    // while (last.next) {
    //   last = last.next;
    // }
    // return last;
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return null;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;

    if (!this.head.next) {
      this.head = null;
      return null;
    }

    let prev = this.head;
    let node = prev.next;
    while (node.next) {
      prev = node;
      node = prev.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    // let newNode = new Node(data);
    // if (!this.head) {
    //   this.head = newNode;
    // } else {
    //   const last = this.getLast();
    //   last.next = newNode;
    // }

    return this.insertAt(data, this.size());
  }

  getAt(index) {
    if (index < 0 || index > this.size()) return null;

    if (index === 0) return this.head;

    let counter = 0;

    let node = this.head;
    while (counter != index && node) {
      node = node.next;
      counter++;
    }
    return node;
  }

  removeAt(index) {
    if (!this.head) return null;
    if (!this.head.next && index !== 0) return null;

    if (index === 0) this.head = this.head.next;

    let target = this.getAt(index);
    let previous = this.getAt(index - 1);

    if (!previous || !previous.next) return null;

    previous.next = target.next;
  }

  insertAt(data, index) {
    // if negative index
    // if (index < 0) return null;

    // there's no node - insert last
    // if index greater than size
    if (!this.head) {
      this.head = new Node(data);
      return null;
    }

    // If trying to insert at 0 when there's data
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // if index is too large getAt will retun null, getLast will return latest value were we can set new node on
    let previous = this.getAt(index - 1) || this.getLast();

    // if (!previous || !previous.next) return null;

    previous.next = new Node(data, previous.next);
  }

  forEach(fn) {
    let current = this.head;
    let counter = 0;
    while (current) {
      fn.apply(this, [current, counter]);
      current = current.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

// insertAt(3)
//     p c
// [0,1,2,3,4,5,6,7]
// p.next = c.next;
