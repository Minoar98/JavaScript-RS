// 4. ["apple", "banana", "avocado", "grape"] is an array. Count the occurrences of the letter 'a' in an array of strings.
// Output: 7

const arr = ["apple", "banana", "avocado", "grApe"];

const result = arr.reduce((count, str) => {
  return count + (str.match(/a/gi) ? str.match(/a/gi).length : 0);
}, 0);

console.log(result);
