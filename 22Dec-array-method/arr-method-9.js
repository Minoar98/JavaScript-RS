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

// 3. Same users array taken from Question-2. Create an array where contains all the hobbies only where age is equal to 30 using reduce method
// Output: ["Cooking for Bob", "Cycling for Bob"] insted of using flat, or flatMap,
// 2 Map, filter, find, findIndex, reduce

const ageIsEqalTo30 = users.reduce((prev, user) => {
  if (user.age === 30) {
    users.map((user) => {
      prev.push(`${user.hobbies} for ${user.name}`);
    });
  }
  return prev;
}, []);

const result = ageIsEqalTo30;
console.log(result);
