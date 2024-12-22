//  [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Count even numbers.

function CountEvenNumbers(arr) {
  let count = 0;
  // console.log(arr);
  return arr.filter((value) => {
    if (value % 2 === 0) {
      count++;
      return value;
    }
  });
}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const result = CountEvenNumbers(arr);
console.log(result);