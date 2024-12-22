// 8. Use map to create a new array of objects with an additional 'ageGroup' property:
// 'Young': age < 25
// 'Adult': age >= 25
// Output:
// [
//    { id: 1, name: 'Alice', age: 25, ageGroup: 'Adult', ... },
//    { id: 2, name: 'Bob', age: 30, ageGroup: 'Adult', ... },
//    { id: 3, name: 'Charlie', age: 22, ageGroup: 'Young', ... }
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
function userNew(user) {
  return {
    ...user,
    ageGroup: user.age >= 25 ? "Adult" : "Young",
  };
}

const result = users.map(userNew);
console.log(result);
