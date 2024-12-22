// Binary Search
// Pre-condition: Array must be sorted before binary search
function binarySearch(arr, target) {
  let start = 0, end = arr.length - 1;

  while (start <= end) {
    let mid = (start + end) / 2;

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1; // Target not found in the array
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;

let result = binarySearch(arr, target);
// console.log(result); // Output: 4

if (result === -1) {
  console.log('Not Found');
} else {
  console.log(`Found at index ${result}`);
}

target = 15;
result = binarySearch(arr, target);
// console.log(result); // Output: 4

if (result === -1) {
  console.log('Not Found');
} else {
  console.log(`Found at index ${result}`);
}

const arr1 = [1, 2, 3, 4, 50, 6, 7, 8]
arr1.sort(function (a, b) { return a - b; });

console.log(arr1);