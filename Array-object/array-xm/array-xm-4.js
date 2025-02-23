// [1,2 , 3] and [4, 5, 6] -> how to merge two arrays (2 ways)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = arr1.concat(arr2); // merge concat ways

console.log(result);

//spread operator

const result2 = [...arr1, ...arr2];
console.log(result);
