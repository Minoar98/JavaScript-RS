// 1. Traverse korbe
// 2. Must provide initial value in 2nd parameter (1st parameter -> callback function)
// 3. Otherwise, it will take 1st element as initial value & start traversing from 2nd element
// 4. Callback function will be taken 4 parameters (1st parameter -> previous value & rest will be as same as find, map, filter etc)
// 5. Main purpose is to sum the values

const nums = [10, 20, 30, 40, 50, 60];

function func(prev, curr, index, array) {
  // console.log("Index: ", index);
  // console.log(prev, curr, index, array);
  return prev + curr;
}

console.log(nums.reduce(func, 0));

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

console.log(
  users.reduce((prev, curr) => {
    return prev + curr.age;
  }, 0)
);

// I can put anything as an initial value
console.log(
  users.reduce(
    (prev, curr) => {
      // console.log(prev, curr);
      return { age: prev.age + curr.age };
    },
    { age: 0 }
  )
);

const objAge = users.reduce(
  (prev, curr) => {
    return { age: prev.age + curr.age };
  },
  { age: 0 }
);

console.log(objAge);
