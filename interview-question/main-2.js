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
    name: 'Ronaldo',
    jerseyNo: 7
}

const { jerseyNo: jerseyNumber } = person;
console.log(jerseyNumber); // ✅ 7


let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;
console.log(a2);

console.log(5 == "5"); // true only value
console.log(5 === "5"); // true value and type

