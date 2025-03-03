// 4. Same users array taken from Question-2. Locate the first person from the 'USA'
// Output:
// {
//     id: 1,
//     name: "Alice",
//     age: 25,
//     // country: "USA",
//     hobbies: ["Reading", "Traveling"],
// }

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

const personFromUsa = users.find((user) => {
  return user.country === "USA";
});

const result = personFromUsa;
console.log(result);
