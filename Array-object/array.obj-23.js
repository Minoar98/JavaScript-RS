// [-20, 50, -34, 55, 95] is an array. Find the sum & avg of maximum & minimum number.

function findSumAvgMaxMin(arr) {
  let max = -Infinity;
  let min = Infinity;
  arr.forEach((value) => {
    if (value > max) {
      max = value;
    }
    if (value < min) {
      min = value;
    }
  });

  const sum = max + min;
  const avg = (max + min) / 2;

  return { sum, avg };
}

const arr = [-20, 50, -34, 55, 95];
const result = findSumAvgMaxMin(arr);
console.log(result);
