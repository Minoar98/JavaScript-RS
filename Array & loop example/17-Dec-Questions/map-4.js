// 4. Create an array of hobby counts for each user (i.e., the number of hobbies each user has).
// Output: [2, 2, 2]

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

function hobbyCount(user) {
  return user.hobbies.length;
}

const result = users.map(hobbyCount);
console.log(result);

// Es6

const hobbyCounts = users.map((user) => user.hobbies.length);
console.log(hobbyCounts)