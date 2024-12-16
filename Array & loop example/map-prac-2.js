const arr = [
  {
    name: "Alice",
    age: 25, // 30
  },
  {
    name: "Bob",
    age: 30, // 35
  },
  {
    name: "Charlie",
    age: 28, // 33
  },
];

function func(value, index, arr) {
  // console.log(value);
  return {
    name: value.name,
    age: value.age + 5,
    fatherName: "David",
  };
}

const result = arr.map(func);
console.log(result);
