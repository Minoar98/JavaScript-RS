// map with string
const str = ["Hello", "World"];
console.log(str.map((st) => st.toUpperCase()));

// index -> even => make string all upper case
// index -> odd => make string all lower case
// output: ['HELLO', 'world']

console.log(
  str.map((st, index) => {
    if (index % 2) {
      // 1 - true
      return st.toLowerCase();
    } else {
      // 0 - false
      return st.toUpperCase();
    }
  })
);

// filter with string
const filterStr = ["Hello", "World", "JS", "NodeJS", "ReactJS"];
console.log(filterStr.filter((st) => st.length >= 5));
console.log(filterStr.filter((st) => st.includes("e")));

// find with string
const filterStr2 = ["Hello", "World", "JS", "NodeJS", "ReactJS"];
console.log(
  filterStr2.find((st) => {
    return st.length === 2;
  })
);

// console.log(filterStr2.find((st) => st.length === 2));

// () => {
//   // more lines
//   return 0;
// }

// () => 0;

// Q: find the string where 'D' letter is present
const filter3 = ["Hello", "World", "JS", "NodeJS", "ReactJS"];
// console.log(filter3.find((st) => st.includes("D/i")));
const letter = "D";
const lowerDLetter = letter.toLowerCase();
console.log(filter3.find((st) => st.includes(lowerDLetter)));

// reduce

const str2 = ["Hello", " ", "world", "!"];
console.log(str2.reduce((prev, curr) => prev + curr, ""));

// "" + "Hello"
// "Hello" + " "
// "Hello " + "world"
// "Hello world" + "!" => "Hello world!"

// "HELLO WORLD!"

const str3 = ["Hello", " ", "world", "!"];
// const UpperDletter = str3.toUpperCase();
console.log(str3.reduce((prev, curr) => prev + curr.toUpperCase(), ""));
// console.log(
//   str3.reduce((prev, curr) => {
//     console.log(prev, curr.toUpperCase());

//     return prev + curr.toUpperCase();
//   }, "")
// );
