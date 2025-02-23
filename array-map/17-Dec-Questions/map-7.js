// 7. Assume users aged 18 and older are eligible for a program.
// Use map to add an 'isEligible' property based on the 'age'
// Output:
// [
//    { id: 1, name: 'Alice', age: 25, isEligible: true, ... },
//    { id: 2, name: 'Bob', age: 30, isEligible: true, ... },
//    { id: 3, name: 'Charlie', age: 12, isEligible: true, ... }
// ]

const users = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    country: "USA",
    hobbies: ["Reading", "Traveling"],
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    country: "UK",
    hobbies: ["Cooking", "Cycling"],
  },
  {
    id: 3,
    name: "Charlie",
    age: 12,
    country: "Canada",
    hobbies: ["Gaming", "Drawing"],
  },
];

function userNew(user) {
  return {
    ...user,
    isEligible: user.age >= 18,
  };
}

const result = users.map(userNew);
console.log(result);

const newUser = (user) => ({
  ...user,
  isEligible: true,
});

const result1 = users.map(newUser);
console.log(result1);
