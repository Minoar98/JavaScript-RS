//1. x= 10,y= 20. make it y = 10; x=20;
// 2. arr=[1, 2, 3] assign that array into another variable.Now make any changes into arr varibale doesnot  affect another variable.
// 3 ['I', 'love', 'JS', 'and', 'React JS'] sort according to element's length
// 4. [1,2 , 3] and [4, 5, 6] -> how to merge two arrays (2 ways)
// 5. people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 25 }
// ]
// Now, group people by their age.
// Output:
// {
//    '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//    '30': [{ name: 'Bob', age: 30 }]
// }

//1. x= 10,y= 20. make it y = 10; x=20;

let x = 10;
let y = 20;

[x, y] = [y, x]; //swap values x = 20, y = 10; // [x,y] = array destructure. right create an array
console.log(x);
console.log(y);

// example
[, , xx, ,yy] = [1, 2, 3, 4, 5];
console.log(xx, yy);


// Array
// String
// Object

