// 2. Generate an array of strings like the following
// Output: ['Alice is 25 years old', 'Bob is 30 years old', 'Charlie is 22 years old']

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

function usersNameAge(value) {
  return `${value.name} is ${value.age} years old`;
}

const result = users.map(usersNameAge);
console.log(result);

/// converted into arrow function

const NameUsersAge = users.map(
  (value) => `${value.name} is ${value.age} years old`
);
console.log(NameUsersAge);
