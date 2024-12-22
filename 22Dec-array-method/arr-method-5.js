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

// 5. Create an array where contains all the hobbies only where age is less or equal to 25.
// Output: ["Reading", "Traveling", "Gaming", "Drawing"]

const userHobbies = users.find((user) => user.age <= 25).hobbies;
console.log(userHobbies);
