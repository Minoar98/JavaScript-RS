// 5. ["hello", "world", "javascript", "is", "fun"] is an array. Get a list/array of unique characters where strings longer than 2 and then count them.
// Output: ["h", "e", "l", "o", "w", "r", "d", "j", "a", "v", "s", "c", "i", "p", "t", "f", "u", "n"], 18

const arr = ["hello", "world", "javascript", "is", "fun"];
const filteredArray = arr.filter((str) => str.length > 2); // strings longer than 2
// console.log(filteredArray);

const allChars = filteredArray.flatMap((str) => str.split("")).join(""); //array to string conversion
// 1. 1d to 2d using split method
// 2. 2d to 1d using flat/flatMap
// 3. array to string conversion.

// console.log(allCharsArray);
// console.log(typeof allCharsArray);

const uniqueChars = [...new Set(allChars)]; // find unique characters

console.log(uniqueChars, uniqueChars.length);
