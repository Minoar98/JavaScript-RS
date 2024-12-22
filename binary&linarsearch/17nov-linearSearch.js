// Linear Search

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;

let result = linearSearch(arr, target);
// console.log(result); // Output: 4

if (result === -1) {
  console.log('Not Found');
} else {
  console.log(`Found at index ${result}`);
}

target = 15;
result = linearSearch(arr, target);
// console.log(result); // Output: 4

if (result === -1) {
  console.log('Not Found');
} else {
  console.log(`Found at index ${result}`);
}