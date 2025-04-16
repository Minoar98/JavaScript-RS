// const { name, jerseyNo } = person;
// console.log(jerseyNumber);
// person.jerseyNumber

// const ar = ["apple", "orange", "kiwi"];

// console.log(ar.unshift("cherry"));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.shift());
console.log(fruits.unshift("Lemon"));

// You have an array `[1, 2, 3, 4, 5]`. How to fetch only first & fifth element using ES6 Syntax.

// const numbers = [1, 2, 3, 4, 5];

// const [first, , , , fifth] = numbers;

// console.log(first); // 1
// console.log(fifth); // 5

const numbers = [1, 2, 3, 4, 5];
const [first, , , , fifth] = numbers;
console.log(first);
console.log(fifth);

