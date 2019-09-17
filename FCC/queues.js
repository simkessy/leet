class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(element) {
    this.collection.push(element);
  }

  dequeue() {
    this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  print() {
    console.log(this.collection);
  }
}

class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      var added = false;

      for (var i = 0; i < this.collection.length; i++) {
        // keep checking until you find priority which is less than inserted element, add element at that position
        if (element[1] < this.collection[i][1]) {
          // insert element at the position where priority is less
          this.collection.splice(i, 0, element);
          added = !added;
          break;
        }
      }

      // if lowest priority, just push at the end
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  dequeue() {
    let value = this.collection.shift();
    return value[0];
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  print() {
    console.log(this.collection);
  }
}

// var q = new Queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.print();
// q.dequeue();
// console.log(q.front());

var pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
pq.enqueue(["Briana Swift", 2]);
pq.print();
pq.dequeue();
console.log(pq.front());
pq.print();
