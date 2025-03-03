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
  {
    id: 4,
    name: "Prince",
    age: 30,
    country: "Australia",
    hobbies: ["Coding", "Bike Riding"],
  },
];

// 3. Same users array taken from Question-2. Create an array where contains all the hobbies only where age is equal to 30 using reduce method
// Output: ["Cooking for Bob", "Cycling for Bob"] insted of using flat, or flatMap,
// 2 Map, filter, find, findIndex, reduce

// const ageIsEqalTo30 = users.reduce((prev, user) => {
//   if (user.age === 30) {
//     users.map((user) => {
//       prev.push(`${user.hobbies} for ${user.name}`);
//     });
//   }
//   return prev;
// }, []);

// const ageIsEqualTo30 = users.find((user) => {
//   return user.age === 30;
// });

// // {
// //     id: 2,
// //     name: "Bob",
// //     age: 30,
// //     country: "UK",
// //     hobbies: ["Cooking", "Cycling"],
// //   },

// const ageIsEqualTo30Hobbies = ageIsEqualTo30.hobbies.map((hobby) => {
//   return `${hobby} for ${ageIsEqualTo30.name}`;
// });

// console.log(ageIsEqualTo30Hobbies);

//  Q. return e template literal er por hobby kn nilam

const ageIsEqualTo30 = users.filter((user) => {
  return user.age === 30;
});

const ageIsEqualTo30Hobbies = ageIsEqualTo30.map((user) => {
  return user.hobbies.map((hobby) => `${hobby} for ${user.name}`);
});

const hobbies = ageIsEqualTo30Hobbies.reduce(
  (acc, hobby) => acc.concat(hobby),
  []
);
console.log(hobbies);

// Answer should be like:
// ["Cooking for Bob", "Cycling for Bob", "Coding for Prince", "Bike Riding for Prince"]
