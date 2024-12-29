// 7. numbers = [-10, 15, -20, 30, -5]. Calculate sum only positive numbers using reduce & filter methods.
// Output: 45

const numbers = [-10, 15, -20, 30, -5];
const positiveNumbers = numbers.filter((num) => num > 0);

const sumOfPositiveNumbers = positiveNumbers.reduce(
  (prev, currNum) => prev + currNum
);
console.log(sumOfPositiveNumbers);
