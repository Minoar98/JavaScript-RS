//3 ['I', 'love', 'JS', 'and', 'React JS'] sort according to element's length

const arr = ["I", "love", "JS", "and", "React JS"];
arr.sort((a, b) => a.length - b.length); // bola na thakle ascending order korbo
console.log(arr);

// reason
// -ve, a < b
// +ve, b < a
// 0, as it is

