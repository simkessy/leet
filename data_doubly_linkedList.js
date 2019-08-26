class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push - add value to end
  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // 99 -> 100
      newNode.prev = this.tail; // 99 <- 100
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // pop - remove last item
  pop() {
    // If there's no item, you can all test if(!this.head){}
    if (this.length === 0) return undefined;
    // Get last item
    let removed = this.tail;

    // if there's only 1 item
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Set tail to previous
      this.tail = removed.prev;
      // Set tail next to null
      this.tail.next = null;
      // Remove link to previous on removed item so it's isolated
      removed.prev = null;
    }
    // reduce length
    this.length--;
    // return removed item
    return removed;
  }

  // shift - remove first item  from begining
  shift() {
    if (!this.head) return undefined;

    // get head
    let removed = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Set new head to it's next element
      this.head = removed.next;
      // Move to next and set it's previous to null since it's the new head there's nothing before it
      this.head.prev = null;
      // Remove the next element so it's isolated
      removed.next = null;
    }
    this.length--;

    return removed;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Point old head to newHead / newNode
      this.head.prev = newNode;
      // Set current head has next for newHead
      newNode.next = this.head;
      // Set head to newNode with oldhead pointing to it already
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    // Test if inputs are good
    if (index >= this.length || index < 0) return null;

    // Check if index is less than half the length
    if (index < this.length / 2) {
      // Set a counter to compare with index
      let counter = 0;
      // Store current node as you iterate
      return (current = this.head);
      // Loop until couter reaches target index
      // Current ends up being value at index
      while (counter !== index) {
        current = current.next;
        counter++;
      }

      return current;
    } else {
      // Counter is length of list
      let counter = this.length - 1;
      // current is tail
      current = this.tail;
      // loop and decrease counter until you reach target index
      while (counter !== index) {
        current = current.prev;
        counter--;
      }

      return current;
    }

    console.log("current:", current);
    return current;
  }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.get(3);
// console.log(list);
