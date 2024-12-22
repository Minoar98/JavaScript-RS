// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Find the 2nd largest element.

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];

arr.sort(function (a, b) {
  return a - b;
});

console.log("2ndLargest value:", arr[arr.length - 2]);
