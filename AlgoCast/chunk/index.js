// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk2(array, size) {
  let newArr = [];
  for (let i = 0; i <= array.length - 1; i++) {
    // Test if the chuck has room
    let chunkPosition = Math.floor(i / size);
    // console.log("i:", i, "chunkPosition", chunkPosition, newArr);
    if (newArr[chunkPosition] && newArr[chunkPosition].length - 1 <= size) {
      // There's room
      newArr[chunkPosition].push(array[i]);
    } else {
      // There's no room - Add new chunk - starting with current number
      newArr.push([array[i]]);
    }
  }
  console.log("newArr:", newArr);
  return newArr;
}

function chunk3(array, size) {
  const chuncked = [];

  for (const element of array) {
    // Get last chunk
    const last = chuncked[chuncked.length - 1];

    // If there's no last or it's reached size
    /*     if (!last || last.length === size) {
      chuncked.push([element]);
    } else {
      last.push(element);
    } */
    !last || last.length === size
      ? chuncked.push([element])
      : last.push(element);
  }

  return chuncked;
}

function chunk4(array, size) {
  let newArr = [];
  let index = 0;

  while (index < array.length) {
    newArr.push(array.slice(index, index + size));
    index += size;
  }

  return newArr;
}

function chunk(array, size) {
  let newArr = [];
  for (let i = 0; i <= array.length - 1; i += size) {
    newArr.push(array.slice(i, i + size));
  }

  return newArr;
}

module.exports = chunk;
