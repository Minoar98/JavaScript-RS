// for in

const arr = [10, 20, 30];
for (let idx in arr) {
  console.log(arr[idx]);
}

const str = "Bangladesh";
for (let idx in str) {
  console.log(str[idx]);
}

// for of

const arr1 = [10, 20, 30];
for (let val of arr1) {
  console.log(val);
}

const obj = {
  x: 10,
  y: 20,
};

const { x: firstValue, y } = obj; // using alias
console.log(firstValue, y);

const y1 = 20;

const obj1 = {
  x1: 10,
  y1, // for same property
};

// object destructing

const { x1, y1: secondValue } = obj1; /// using alias

console.log(x1, secondValue);

//

const y2 = 20;
const obj2 = {
  x2: 10,
  y2, // For same property naming
  z: 30,
};

const { x2, z } = obj2;
console.log(x2, z);

const ar = [10, 20, 30, 40];
// Array destructing

const [a, b, c] = ar;
console.log(a, b, c);

// ignoring

const [x3, , , z3] = ar;
console.log(x3, z3);

// Number Swapping - Using math

let a1 = 10;
let b1 = 5;

a1 = a1 + b1;
b1 = a1 - b1;
a = a1 - b1;
// Number Swapping - Using math
let a2 = 10;
let b2 = 5;

a = a + b; // 15
b = a - b; // 10
a = a - b; // 5

console.log(a1, b1);


