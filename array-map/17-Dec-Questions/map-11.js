// 11. Generate an array of strings summarizing each user's age and hobbies
// Output:
// [
//    'Alice, aged 25, loves Reading and Traveling.',
//    'Bob, aged 30, loves Cooking and Cycling.',
//    'Charlie, aged 22, loves Gaming and Drawing.'
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
    age: 22,
    country: "Canada",
    hobbies: ["Gaming", "Drawing"],
  },
];

function userNewString(user) {
  return `${user.name} aged ${user.age}, loves ${user.hobbies.join(" and ")}`;
}

const result = users.map(userNewString);
console.log(result);
