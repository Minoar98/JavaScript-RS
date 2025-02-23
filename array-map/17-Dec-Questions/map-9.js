// 9. Add a 'uuid' property to each user, generating unique IDs like
// Output:
// [
//    { id: 1, name: 'Alice', uuid: 'user-1', ... },
//    { id: 2, name: 'Bob', uuid: 'user-2', ... },
//    { id: 3, name: 'Charlie', uuid: 'user-3', ... }
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
    uuid: `user-${user.id}`,
  };
}

const value = users.map(userNew);
console.log(value);

/// converted into arrow function
// const newUser = (user) => {
//   return {
//     ...user,
//     uuid: `user-${user.id}`,
//   };
// };

const result = users.map((user) => {
  return {
    ...user,
    uuid: `user-${user.id}`,
  };
});
console.log(result);
