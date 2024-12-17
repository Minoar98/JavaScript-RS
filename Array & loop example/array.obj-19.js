// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array.t Count odd numbers.

function CountOddNumbers(arr) {
  let count = 0;
  // console.log(arr);
  return arr.filter((value) => {
    if (value % 2 === 1) {
      count++;
      return value;
    }
  });
}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const result = CountOddNumbers(arr);
console.log(result);
