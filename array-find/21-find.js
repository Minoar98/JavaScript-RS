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
    age: 22,
    country: "Canada",
    hobbies: ["Gaming", "Drawing"],
  },
];

// 1. Find the user who's age is less or equal to 25.
// const user = users.find((user) => {
//   return user.age >= 25;
// });
// console.log(user);

// 2. Find the user's name who's age is equal to 30. Output: 'Bob'
const userName = users.find((user) => {
  return user.age === 30;
}).name;
console.log(userName);

// findIndex (find-case)
const userIndex = users.findIndex((user) => {
  return user.age === 30;
});
console.log(userIndex);


// findIndex (not-find-case)
const userIndex2 = users.findIndex((user) => {
  return user.age === 37;
});
console.log(userIndex2); // Output: -1