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
// Output: ["Reading", "Traveling", "Gaming", "Drawing"] -> 1D Array
//         [ [ 'Reading', 'Traveling' ], [ 'Gaming', 'Drawing' ] ] -> 2D Array

// const userHobbies = users.find((user) => user.age <= 25).hobbies;
// console.log(userHobbies);

const filteredUsersBasedOnAge = users.filter((user) => {
  return user.age <= 25;
});
// console.log(userHobbies);

const userHobbies = filteredUsersBasedOnAge.map((user) => user.hobbies);
// console.log(userHobbies); // [ [ 'Reading', 'Traveling' ], [ 'Gaming', 'Drawing' ] ]

// Version 1. --------------- start -----------------------
// const allHobbies = [];
// userHobbies.forEach((hobbies) => {
//   // console.log(hobbies); // Output: 1st iteration: [ 'Reading', 'Traveling' ], 2nd iteration: [ 'Gaming', 'Drawing' ]
//   hobbies.forEach((hobby) => {
//     // console.log(hobby); Output: 1st iteration: 'Reading', 2nd iteration: 'Traveling'
//     allHobbies.push(hobby);
//   });
// });
// console.log(allHobbies); // 1D Array
// --------------- end -----------------------

// Version 2. --------------- start -----------------------
// const allHobbies = [];
// userHobbies.forEach((hobbies) => {
//   // console.log(hobbies); // Output: 1st iteration: [ 'Reading', 'Traveling' ], 2nd iteration: [ 'Gaming', 'Drawing' ]
//   allHobbies.push(...hobbies); // spread operator (ES6)
// });
// console.log(allHobbies); // 1D Array
// --------------- end -----------------------

// Version 3. --------------- start -----------------------
// const allHobbies = userHobbies.flat();
// console.log("Using flat() method: ", allHobbies); // 1D Array

// If the output: [ [ 'Reading', 'Traveling' ], [ 'Gaming', 'Drawing', [ 'Gaming', 'Drawing' ] ] ]
// Then use like: const allHobbies = userHobbies.flat(Infinity);
// --------------- end -----------------------

// Version 4. --------------- start -----------------------
// const allHobbies = filteredUsersBasedOnAge.flatMap((user) => user.hobbies);
// console.log("Using flatMap() method: ", allHobbies); // 1D Array
// --------------- end -----------------------

// Version 5. --------------- start -----------------------
// const allHobbies = users
//   .filter((user) => user.age <= 25)
//   .map((user) => user.hobbies)
//   .flat();
// console.log("Using chaining: ", allHobbies); // 1D Array
// --------------- end -----------------------

// Version 6. --------------- start -----------------------
const allHobbies = users
  .filter((user) => user.age <= 25)
  .flatMap((user) => user.hobbies);
console.log("Using chaining & flatMap(): ", allHobbies); // 1D Array
// --------------- end -----------------------
