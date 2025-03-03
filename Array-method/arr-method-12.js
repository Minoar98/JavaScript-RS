// 6. numbers = [-10, 15, -20, 30, -5]. Calculate sum only positive numbers only using reduce method.
// Output: 45
const numbers = [-10, 15, -20, 30, -5];
const sumOfPositiveNumbers = numbers.reduce((prev, currNum) => {
  if (currNum > 0) {
    prev += currNum;
  }
  return prevnum;
}, 0);

console.log(sumOfPositiveNumbers);
