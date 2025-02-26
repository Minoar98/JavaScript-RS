// 5. people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 25 }
// ]
// Now, group people by their age.
// Output:
// {
//    '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//    '30': [{ name: 'Bob', age: 30 }]
// }

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

const gorupPeopleByAge = people.reduce((prev, curr) => {
  const age = curr.age; // age dore nici
  if (!prev[age]) {
    prev[age] = [];
  }
  prev[age].push(curr);
  return prev;
}, {});

console.log(gorupPeopleByAge);
