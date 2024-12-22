
const arr = [
    { id: 1, val: 10 },
    { id: 2, val: 30 },
  ];
 

//   const arr1 = [1, 23, 4, 52, 3]

  let sum = arr.reduce((sm, value, index, array) =>{
    console.log(sm, value, index, array)
    return sm + value.val;
  }, 100);

  console.log(sum);


//   array every

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(allOver18);

// array some
const numbers1 = [45, 4, 9, 16, 25];
let allOver181 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}

console.log(allOver181);


// array form

const myArr = Array.from("ABCDEF")
console.log(myArr)


// array entries es6

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4]
console.log(year)


// indexof array search

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position);

// last indexof
const fruits1 = ["Apple", "Orange", "Apple", "Mango"];

let position1 =fruits1.lastIndexOf("Apple") + 1;
console.log(position1)

// includes

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];

fruits3.includes("Mango"); // is true
console.log(fruits3)

// find

const numbers2 = [4, 9, 16, 25, 29];
let first = numbers2.find(myFunction);

function myFunction(value, index, array) {
    return value > 18
}

console.log(first);

// findindex

const numbers3 = [4, 9, 16, 25, 29];

let first1 = numbers3.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
 console.log(first1)

 // method slice

 const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits4.slice(1, 5);

console.log(citrus)


// flat

const arr1 = [1, 2, 3, [4, 5], [5, 6, [7]]]; // 3d
[1, 2, 3, 4, 5, 5, 6, 7]; // 1d
console.log(arr)

const a = []
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i].length) {
    for (let j = 0; j < arr1[i].length; j++) {
      a.push(arr1[i][j]);
    }
  } else {
    a.push(arr1[i]);
  }
}

console.log(a);

console.log(arr.flat());
console.log(arr.flat(Infinity));


//math  max

const arr4 = [1, 2, 3, 4, 5];
console.log(Math.max(...arr4))

console.log(arr4)
console.log(...arr4.join(','))


const add = (a, b) => {
    return a + b;
  }
  
  const val = add(1, 2);
  console.log(val);

  const arr5 = [2, 44];
const val2 = add(...arr5);
console.log(val2)

//sort

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.sort();
console.log(fruit);

//to sorted
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted)


const points = [40, 100, 1, 5, 25, 10];
const result = points.sort(function (a, b) {
  return a - b;
});

console.log(result)