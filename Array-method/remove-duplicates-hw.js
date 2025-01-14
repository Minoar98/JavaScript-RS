// filter

const arr = [5, 3, 3, 4, 2, 5, 1, 6];
const removeDuplicates = [];
arr.filter((val) => {
  if (!removeDuplicates.includes(val)) {
    removeDuplicates.push(val);
  }
});

console.log(removeDuplicates);

// reduce

const arr1 = [5, 3, 3, 4, 2, 5, 1, 6];
const removeDuplicates1 = [];
arr1.reduce((prev, curr) => {
  if (!removeDuplicates1.includes(curr)) {
    removeDuplicates1.push(curr);
  }
  return prev;
}, []);

console.log(removeDuplicates1);

// sort - H.W

const arr2 = [5, 3, 3, 4, 2, 5, 1, 6];

const removeDuplicates2 = arr2.sort((a, b) => a - b);

console.log("sorted arr", removeDuplicates2);

// another way

const arr3 = [5, 3, 3, 4, 2, 5, 1, 6];
const setFromArray = new Set([arr3]);
const arrayFromSet = [...setFromArray];
console.log(arrayFromSet);
console.log([...new Set(arr3)]);
