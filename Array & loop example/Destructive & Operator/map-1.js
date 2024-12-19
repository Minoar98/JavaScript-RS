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


function func(value) {
    const fatherName = "David"
 
  return {
    ...value, // Copy
    fatherName, // add
    age: `${value.age + 5} `, // update
  };
}

const result = arr.map(func);
console.log(result);
