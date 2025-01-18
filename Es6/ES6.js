const user = {
  id: Date.now().toString() // timestamp
}

console.log(user.id);



// for-in
const arr = [10, 20, 30];
for (let idx in arr) {
  console.log(arr[idx]);
}

const str = "Bangladesh";
for (let idx in str) {
  console.log(str[idx]);
}

// for-of
const arr = [10, 20, 30];
for (let val of arr) {
  console.log(val);
}

const str = "Bangladesh";
for (let val of str) {
  console.log(val);
}

const obj = {
  x: 10,
  y: 20
}

const {x: firstValue, y} = obj; // using alias

console.log(firstValue, y);

const y = 20;

const obj = {
  x: 10,
  y // For same property naming
}

// Object destructuring
const {x, y: secondValue} = obj; // using alias

console.log(x, secondValue);

const y = 20;

const obj = {
  x: 10,
  y, // For same property naming
  z: 30
}

const {x, z} = obj; // ignoring 'y'

console.log(x, z);

const ar = [10, 20, 30, 40];

// Array destructuring
const [a, b, c] = ar;
console.log(a, b, c);

// ignoring
const [x, , , z] = ar;
console.log(x, z);

// Number Swapping - Using math
let a = 10;
let b = 5;

a = a + b; // 15
b = a - b; // 10
a = a - b; // 5

console.log(a, b)

// output:
// a = 5
// b = 10

// Number Swapping - Using array destructuring
let a = 10;
let b = 5;

[b, a] = [a, b]

console.log(a, b)

// output:
// a = 5
// b = 10