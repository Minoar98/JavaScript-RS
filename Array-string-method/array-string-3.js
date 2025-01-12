// 3. [["hello", "world"], ["javascript", "is"], ["fun", "for", "everyone"]] is an array. Find the first occurrence of "a" word in a nested array.
// Output: javascript

const array = [
  ["hello", "world"],
  ["javascript", "is"],
  ["fun", "fora", "everyone"],
];

for (let i = 0; i < array.length; i++) {
  let flag = false;
  for (let j = 0; j < array[i].length; j++) {
    // console.log(array[i][j]);
    if (array[i][j].includes("a")) {
      console.log(array[i][j]);
      flag = true;
      break;
    }
  }

  if (flag) {
    break;
  }
}

// Using all Array methods

console.log(
  "My code: ",
  array.flat().find((word) => word.includes("a"))
);

// Modification: last occerance of 'a' world
const result = array.reduce((prev, curr) => {
  const foundIndex = curr.findIndex((word) => word.includes("a"));
  if (foundIndex !== -1) {
    return curr[foundIndex];
  }
  return prev;
}, null);

console.log(result); // Output: javascript
