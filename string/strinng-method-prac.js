//JavaScript String split()

const text = "a, b, c, d, e, f";
const myArr = text.split("|");
console.log(myArr);

//02
const sentence = "I am learning Javascript";
const words = sentence.split(" "); // split by spaces
console.log(words);

const data = "apple, banana, cherry";
const fruits = data.split(",");
console.log(fruits);

const sentence1 = "JavaScript is awesome";
const parts = sentence1.split(" ", 1);
console.log(parts);
