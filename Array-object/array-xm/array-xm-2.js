// 2. arr=[1, 2, 3] assign that array into another variable.Now make any changes into 'arr' variable doesnot  affect another variable.
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // assign that array into another variable

arr1.push(4); // make changes
console.log(arr1); // doesnot  affect another variable
console.log(arr2);

// ...arr1 -> 1, 2, 3
// [...arr1] -> [1, 2, 3]