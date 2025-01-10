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
