// No duplicate values
// Like an array

// diff between array & set
// 1. array contains duplicate values, set does not
// 2. array maintains ordering, set doesn't

const list = new Set([10, 20, 30, 10]); // Initialization & declaration
console.log(list); // Print

console.log(list.has(10)); // exist or not
console.log(list.has(100));

list.delete(10); // Delete
console.log("10 is deleted: ", list);

list.add(200).add(300); // method chaining
console.log("New list: ", list);

console.log("Size: ", list.size); // get the size of the set

// list.clear(); // clear all values
// console.log("Have I found anything? ", list);

// for-of -> Set traversal
for (let value of list) {
  console.log(value);
}

// Example: Remove duplicates
const arr = [5, 3, 3, 4, 2, 5, 1, 6];
const setFromArray = new Set(arr);
const arrayFromSet = [...setFromArray];

console.log(arrayFromSet);
console.log([...new Set(arr)]);

// H.W
// 1. Union -> [1, 2, 3, 4]
// 2. Intersection -> [2, 3]
// 2. Difference -> [2]

// const a = [1, 2, 3];
// const b = [2, 3, 4];

// Remove duplicates using sort function
// array-string-5
