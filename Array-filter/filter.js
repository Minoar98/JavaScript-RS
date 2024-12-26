// 1. Workable in an array
// 2. Traverse
// 3. Create a new array
// 4. Length or size may or may not match with original array's length (less or equal to)
// 5. Must use condition after 'return' keyword

const arr = [10, 25, 30, 45];

const newArr = arr.filter((value, index, array) => {
  // console.log(value, index, array);
  return value % 2 === 0;
});

console.log(newArr.length, newArr);

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

// const newUsers = users.filter((user) => user.age <= 25);
// console.log(newUsers);

function findUsersBasedOnAge(user) {
  return user.age <= 30;
}

const newUsers = users.filter(findUsersBasedOnAge);
console.log(newUsers);
