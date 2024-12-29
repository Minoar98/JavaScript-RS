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
// // Now, Create an array where contains all the hobbies only where age is less or equal to 25 using reduce method
// // Output: ["Reading", "Traveling", "Gaming", "Drawing"]

const personFromUsa = users.reduce((prev, curr) => {
  if (curr.age <= 25) {
    return prev.concat(curr.hobbies);
  }
  return prev;
}, []);

const result = personFromUsa;
console.log(result);
