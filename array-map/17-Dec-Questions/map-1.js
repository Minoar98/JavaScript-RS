// 1. Create an array of just the 'name' property from the users
// Output: ['Alice', 'Bob', 'Charlie']

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

// const usersName = users.map((user) => user.name);

function usersName(user) {
  return user.name;
}

const result = users.map(usersName);
console.log(result);

// convert into es6

const nameUser = users.map((user) => user.name);
console.log(nameUser);
