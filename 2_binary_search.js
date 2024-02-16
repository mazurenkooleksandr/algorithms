const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let found = false;
  let middle;
  let positions = -1;

  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((end + start) / 2);
    if (array[middle] === item) {
      found = true;
      positions = middle;
      return positions;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return positions;
}

console.log(binarySearch(array, 111));
console.log("count: ", count);
