class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add value to list
  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // Pop: Remove and return last item
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let prevNode = current;

    while (current.next) {
      prevNode = current;
      current = current.next;
    }

    // Set tail to 2nd last node
    this.tail = prevNode;
    // Remove it's next, since it's now the last
    this.tail.next = null;
    // Reduce length of list
    this.length--;

    // Reset head and tail if there's 0 now
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // Return what we just popped
    console.log(JSON.stringify(this, null, 2));
    console.log("pop", current);
    return current;
  }

  // Shift - remove node from beginning
  shift() {
    if (!this.head) return undefined;

    // store current head
    let oldHead = this.head;

    // set next item has new head
    this.head = this.head.next;

    this.length--;

    // return  first value
    return oldHead;
  }

  // Unshift - had value at the begining of an array
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // // take the current head
      // let oldHead = this.head;
      // // set new head as current head
      // this.head = newNode;
      // // take old head and its list and set as next for new head
      // this.head.next = oldHead;

      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index > this.length || index < 0) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  //
  set(index, val) {
    // get right side
    let right = this.get(index);
    if (right) {
      right.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;

    // !! because you want true or false returned
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    // Get everythign before
    let prev = this.get(index - 1);
    // Get everything after
    let temp = prev.next;
    // Set everything after on new node
    newNode.next = temp;
    // Set updated new node on prev
    prev.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 && index >= this.length) return undefined;
    // Shift - remove from start
    if (index === 0) return !!this.shift();
    // Remove from end
    if (index === this.length - 1) return !!this.pop();

    // Get prev chain
    let prev = this.get(index - 1);
    // Get right side of chain
    let removed = prev.next;
    // Set right side of chain to prev.next (removing middle val)
    prev.next = removed.next;

    this.length--;
    return removed;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  reverse() {
    // Switch head and tail
    var current = this.head;
    this.head = this.tail;
    this.tail = current;

    var next;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      console.log("i:", i);
      // old head's next value is stored in next
      console.log("next: ", JSON.stringify(next, null, 2));
      // Save next set
      next = current.next;
      // Reverse Link
      current.next = prev;
      // Reverse Link

      //Move prev and curr down one
      prev = current;
      current = next;
      console.log("prev: ", JSON.stringify(prev, null, 2));
      console.log("cur: ", JSON.stringify(current, null, 2));
      console.log("--------------------");
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("Hello-1");
list.push("Hello-2");
list.push("Hello-3");
list.push("Hello-4");
list.push("Hello-5");
list.reverse();
console.log(JSON.stringify(list, null, 2));

{
  next = current.next;
  curent.next = prev;
  prev = current;
  current = next;
}
