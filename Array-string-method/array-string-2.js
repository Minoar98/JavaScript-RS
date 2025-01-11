// 2. ["apple", "banana", "pie", "cake", "orange"] is an array. Find out strings longer than 3 characters that also contain the letter 'a'.
// Output: ["apple", "banana", "orange"]

const arr = ["apple", "banana", "pie", "cake", "orange"];

console.log(arr.filter((st) => st.length > 3 && st.includes("a")));
