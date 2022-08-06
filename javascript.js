/**
 * Take an array, split into smaller and smaller subarrays until they each consist of
 * one or two elements.  Then sort those sub arrays and merge them, then merge the merged sub arrays, etc.
 */

const mergeSort = function divideAndConquer(array) {
  if (array.length === 1) {
    return array;
  }

  let midIndex = Math.floor(array.length / 2);
  console.log(midIndex);

  let left = array.slice(0, midIndex);
  console.log(`left: ${left}`);

  let right = array.slice(midIndex);
  console.log(`right: ${right}`);
};

mergeSort([0, 1, 3, 4, 1]);
