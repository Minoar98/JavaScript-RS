//  [-20, 50, -34, 55, 95] is an array. Find the difference between maximum & minimum number.

function findDiffBetwnnMaxMin(arr) {
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

  return max - min;
}

const arr = [-20, 50, -34, 55, 95];
const result = findDiffBetwnnMaxMin(arr);
console.log(result);
