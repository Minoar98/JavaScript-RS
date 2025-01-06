// 10. fruits = ['apple', 'banana', 'cherry', 'kiwi', 'apple', 'kiwi', 'orange']. Use forEach method to count occurrences of each character in a string.
// Output: { apple: 2, banana: 1, cherry: 1, kiwi: 2, orange: 1 }

const fruits = ["apple", "banana", "cherry", "kiwi", "apple", "kiwi", "orange"];

const output = {};
fruits.forEach((fruit) => {
  // console.log(fruit);

  // Traditional if-else statements
  // if (output[fruit] === undefined) {
  //   output[fruit] = 1;
  // } else {
  //   output[fruit] += 1;
  // }

  // Ternary operators
  // output[fruit] = output[fruit] === undefined ? 1 : output[fruit] + 1;

  // Ternary operators (alternate way)
  output[fruit] = !output[fruit] ? 1 : output[fruit] + 1;
});

console.log(output);

// 0, false, undefined, null, ""(empty string), NaN

// val === 0, val === undefined (used for being specific)
// !val (alternate way) - covers all the falsy values