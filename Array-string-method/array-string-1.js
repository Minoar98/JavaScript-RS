// 1. ["hello", "world", "javascript", "is", "fun"] is an array. Create a new array like the output
// Output:
// [ { word: 'hello', length: 5 }, { word: 'world', length: 5 }, { word: 'javascript', length: 10 }, { word: 'is', length: 2 }, { word: 'fun', length: 3 } ]

const arr = ["hello", "world", "javascript", "is", "fun"];
console.log(
  arr.map((word) => {
    return {
      word,
      length: word.length,
    };
  })
);
