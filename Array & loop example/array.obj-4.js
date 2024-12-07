// [42, 26, 74, 80, 49] is the array. find the maximum value
function findMaxValue(arr) {
    let max = -Infinity;
    arr.forEach(value => {
      if (value > max) {
        max = value;
      }
    });

    return max;
}

const arr = [42, 26, 74, 80, 49];
const maxValue = findMaxValue(arr);
console.log(maxValue);