// 10. Use map to generate an array of objects where each hobby is transformed into a keyword object
// Output:
// [
//    { user: 'Alice', keywords: ['#Reading', '#Traveling'] },
//    { user: 'Bob', keywords: ['#Cooking', '#Cycling'] },
//    { user: 'Charlie', keywords: ['#Gaming', '#Drawing'] }
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

const result = users.map((user) => {
  return {
    user: user.name,
    keywords: user.hobbies.map((hobby) => `#${hobby}`), // hobies again map calyci
  };
});
console.log(result);
