class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  // bubble up
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];

    let parentIndex = Math.floor((index - 1) / 2);
    let parent = this.values[parentIndex];

    while (parent < element && index >= 0) {
      // If parent is smaller than value, swap
      this.values[parentIndex] = element;
      this.values[index] = parent;

      console.log(parentIndex, index, this.values);
      index = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
      console.log("parentIndex:", parentIndex);
      parent = this.values[parentIndex];
      console.log("parentValue:", parent);
    }
  }

  insert(value) {
    // add to end
    this.values.push(value);

    this.bubbleUp();

    console.log(this.values);
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(100);
heap.insert(1);
heap.insert(12);
