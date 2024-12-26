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

// 6. Create an array where contains all the hobbies only where age is equal to 30.
// Output: ["Cooking for Bob", "Cycling for Bob"]

const hobbies = users
  .filter((user) => user.age === 30)
  .flatMap((user) =>
    user.hobbies.map((hobbies) => `${hobbies} for ${user.name}`)
  );
console.log(hobbies);
