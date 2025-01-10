// [5, 3, 3, 4, 2, 5, 1, 6]
// Output: [1, 2, 3, 4, 5, 6]

const arr = [5, 3, 3, 4, 2, 5, 1, 6];

const removeDuplicates = [];
for (let i = 0; i < arr.length; i++) {
  if (removeDuplicates.includes(arr[i]) === false) {
    removeDuplicates.push(arr[i]);
  }
}

console.log(removeDuplicates);

// forEach

const arr2 = [5, 3, 3, 4, 2, 5, 1, 6];
const removeDuplicates2 = [];
arr2.forEach((num) => {
  if (!removeDuplicates2.includes(num)) {
    removeDuplicates2.push(num);
  }
});

console.log(removeDuplicates2);

// 3. filter
// 4. reduce
// 5. sort
// 6. Another way

// filter

const arr3 = [5, 3, 3, 4, 2, 5, 1, 6];
const removeDuplicates3 = [];
arr3.filter((val) => {
  if (!removeDuplicates3.includes(val)) {
    removeDuplicates3.push(val);
  }
});

console.log(removeDuplicates3);

// reduce

const arr4 = [5, 3, 3, 4, 2, 5, 1, 6];
const removeDuplicates4 = [];
arr4.reduce((prev, curr) => {
  if (!removeDuplicates4.includes(curr)) {
    removeDuplicates4.push(curr);
  }
  return prev;
}, []);

console.log(removeDuplicates4);

// sort

const arr5 = [5, 3, 3, 4, 2, 5, 1, 6];

const removeDuplicates5 = arr5.sort((a, b) => a - b);

console.log(removeDuplicates5);
