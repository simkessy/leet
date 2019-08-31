class MaxBinaryHeap {
  constructor() {
    this.values = [];
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

  sinkDown() {
    // start at the top
    let index = 0;
    let length = this.values.length;

    // Get first element
    let element = this.values[0];

    while (true) {
      // get indices for left and right
      // (2*idx)+1
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;

      // set left and right before look to check youre not trying to set it outside of range
      let left, right;
      let swap = null;

      // check if left index is inside range
      if (leftIdx < length) {
        // get left value and compare with parent
        left = this.values[leftIdx];

        if (left > element) {
          // if left is large than parent store left position
          swap = leftIdx;
        }
      }
      // check if right index inside range
      if (rightIdx < length) {
        // get right value to compare
        right = this.values[rightIdx];
        if (
          // if we DONT PLAN to swap with left AND right is larger
          (swap === null && right > element) ||
          // OR if we PLANNED to swap BUT RIGHT IS LARGER
          (swap !== null && right > left)
        ) {
          // Then swap with right INSTEAD
          swap = rightIdx;
        }
      }

      // If there's no swap we're done
      if (swap === null) break;

      // SWAP
      this.values[index] = this.values[swap];
      this.values[swap] = element;

      // Update index to swap area and repeat
      index = swap;
    }
  }

  extractMax() {
    // Swap first with last
    let max = this.values[0];
    let end = this.values.pop();

    // Dont sink down if array is empty
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    console.log(this.values);
    return max;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extractMax();
heap.extractMax();
