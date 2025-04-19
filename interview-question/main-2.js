const obj = {
  firstName: "Tamim",
  lastName: "Iqbal",
  1: "age",
};

obj.firstName;
obj["firstName"];
console.log(obj[1]);

// const person = {
//   name: "Ronaldo",
//   jerseyNo: 7,
// };

// const { jerseyNo: jerseyNumber } = person;
// console.log(jerseyNumber);

const person = {
  name: "Ronaldo",
  jerseyNo: 7,
};

const { jerseyNo: jerseyNumber } = person;
console.log(jerseyNumber); // ✅ 7

let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;
console.log(a2);

console.log(5 == "5"); // true only value
console.log(5 === "5"); // true value and type

// Arrow function
const x = (x) => x;
const val = x(10);
console.log(val); // 10

// Vanilla
function fn(value) {
  return value;
}

const returnedValue = fn(10);
console.log(returnedValue);

var varValue = "bangladesh";
console.log(varValue.length);

var varValue = 10;
console.log(varValue.length);

// 17 no
const firstName = "Sakib";
const lastName = "Al Hasan";
const playerAge = 37;

const player = {
  firstName,
  lastName,
  age: playerAge,
};

console.log(player);

// Question
// cosnt x = 10;
// const xx = { x }

let t = 5;

console.log(t++);

console.log(t);

console.log(++t);
