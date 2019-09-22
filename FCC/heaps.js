// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(num) {
    // add to end of heap
    this.heap.push(num);

    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      while (this.heap[idx] < Math.floor(idx / 2)) {
        if (idx >= 1) {
          //switch
          [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
            this.heap[idx],
            this.heap[Math.floor(idx / 2)]
          ];

          // Update index
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  }
}
