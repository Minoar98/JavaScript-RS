// arr = [1, 2, 3, 4, 5], print all the odd numbers.

const arr = [1, 2, 3, 4, 5];
const oddArr = arr.filter(value => value % 2 === 1);
console.log(oddArr);


// arr = [1, 2, 3, 4, 5], print all the even numbers

const arr1 = [1, 2, 3, 4, 5];
const even = arr1.filter(value => value % 2 === 0);
console.log(even);

// 6. [4, 2, 7, 8, 9] is the array. find the sum of that array

const arr2 = [4, 2, 7, 8, 9]
const result = arr2.reduce((prevValue, currValue) => prevValue + currValue, 10)
console.log(result);