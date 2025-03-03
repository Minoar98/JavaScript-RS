// 1. arr = [[1, 2], [3, 4], [5]]. Flatten a nested array using reduce method.
// Output: [1, 2, 3, 4, 5]

function flattenNestArr(prev, curr) {
  return prev.concat(curr);
}

const arr = [[1, 2], [3, 4], [5]];
const result = arr.reduce(flattenNestArr, []);
console.log(result);
