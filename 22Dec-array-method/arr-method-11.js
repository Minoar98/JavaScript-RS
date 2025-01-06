// 5. words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'banana']. Generate a frequency count of words.
// Output: { apple: 2, banana: 3, cherry: 1 }

const words = ["apple", "banana", "apple", "cherry", "banana", "banana"];

const frequencyCount = words.reduce((prev, curr) => {
  if (prev[curr] === undefined) {
    prev[curr] = 1;
  } else {
    prev[curr] += 1;
  }

  return prev;
}, {});

console.log(frequencyCount);

// {}
// { 'apple': 1 }
// { 'apple': 2, 'banana': 1 }
