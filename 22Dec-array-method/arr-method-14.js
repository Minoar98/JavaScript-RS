// 9. people = [
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

const groupPeopleAge = people.reduce((prev, curr) => {
  // console.log("MY OBJ ", curr);
  if (prev[curr.age] === undefined) {
    prev[curr.age] = [curr];
  } else {
    prev[curr.age] = [...prev[curr.age], curr];
  }
  return prev;
}, {});

console.log(groupPeopleAge);
