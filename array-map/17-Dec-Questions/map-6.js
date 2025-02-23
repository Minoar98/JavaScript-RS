// 6. Create an array of profile URLs for each user based on their 'id' and 'name'
// Output:
// [
//    { id: 1, name: 'Alice', age: 25, isEligible: true, ... },
//    { id: 2, name: 'Bob', age: 30, isEligible: true, ... },
//    { id: 3, name: 'Charlie', age: 22, isEligible: true, ... }
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

function userProfileUrls(user) {
  return {
    ...user,
    isEligible: true,
  };
}

const result = users.map(userProfileUrls);
console.log(result);

// convert into arrow function
const userProfileUrls1 = (user) => ({
  
  ...user,
  isEligible: true,
});

const result1 = users.map(userProfileUrls1);
console.log(result1);
