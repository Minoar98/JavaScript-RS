const person = {
  name: "Younus",
  age: 25,
};

// finding keys() in object
const keys = Object.keys(person);
console.log(keys);

// finding values() in object
const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);

function getValues(firstValue, secValue, ...rest) {
  console.log(firstValue, secValue, rest);
}

getValues(10, 20, 30);
getValues(10, 20, 30, 40, 50);
getValues(10, 20, 30, 40, 50, 1, 2, 34, 4, 5, 6, 7, 6, 1, 1, 1);

const nums = [1, 2, [3, 4], 5, 6];
const [, , [, x], , y] = nums;
console.log(x, y);

// Import/export
// Tagged Template Literal - done
// Map() - done
// Splace()
// Nullish Coaleshing -> ?? - done
// Optional Chaining
// 