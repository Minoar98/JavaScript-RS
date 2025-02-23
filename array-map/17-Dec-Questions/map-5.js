// 5. Create an array of strings summarizing each user's hobbies.
// Output:
// [
//    'Alice enjoys Reading and Traveling.',
//    'Bob enjoys Cooking and Cycling.',
//    'Charlie enjoys Gaming and Drawing.'
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

function userHobbiesString(user) {
  return `${user.name} enjoys ${user.hobbies.join(" & ")}`;
}

const result = users.map(userHobbiesString);
console.log(result);

const hobbiesUserString = users.map(
  (user) => `${user.name} enjoys ${user.hobbies.join(" & ")}`
);

console.log(hobbiesUserString);