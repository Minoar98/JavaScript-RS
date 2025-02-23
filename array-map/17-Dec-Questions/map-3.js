// 3. Assume the 'name' property has only first names. Use map to add a 'fullName' property, appending 'Smith' as the last name
// Output:
// [
//    { id: 1, name: 'Alice', fullName: 'Alice Smith', ... },
//    { id: 2, name: 'Bob', fullName: 'Bob Smith', ... },
//    { id: 3, name: 'Charlie', fullName: 'Charlie Smith', ... }
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

function usersNameAge(value) {
  return {
    ...value,
    fullName: `${value.name} Smith`,
  };
}

const result = users.map(usersNameAge);
console.log(result);

// convert into arrow function

const nameAgeUser = users.map((value) => {
  return {
    ...value,
    fullName: `${value.name} Smith`,
  };
});
console.log(nameAgeUser);
