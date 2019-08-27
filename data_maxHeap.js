class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  // bubble up
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      // check to make sure parent is larger
      if (element <= parent) break;

      // Swap
      this.values[parentIndex] = element;
      this.values[index] = parent;

      // Update index
      index = parentIndex;
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
