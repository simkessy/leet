function insertionSort(arr) {
  // start at 1 because you don't need to compare the first number against nothing
  for (let i = 1; i < arr.length; i++) {
    const compareItem = arr[i];

    // keep going down until you run out or compare value greater than item
    for (var j = i - 1; j >= 0 && arr[j] > compareItem; j--) {
      const item = arr[j];
      console.log(i, j, compareItem, item);
      console.log("SWAP");
      // Switch last numbers
      // [76,4] > [4,76]
      arr[j + 1] = item;
      console.log("arr", arr);
    }
    // the for loop ends but j is one less than then in the inner loop
    // j moves back after previous iteration
    // so you add one to it to place current item where j used to be
    arr[j + 1] = compareItem;
  }
  console.log(arr);
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
