const arr2 = [5, 3, 3, 4, 2, 5, 1, 6];

const sortedArray = arr2.sort((a, b) => a - b);

console.log("Sorted array: ", sortedArray);

const removeDuplicates = [];
for (let i = 0; i < sortedArray.length; i++) {
  // console.log(
  //   `Index: ${i}, element: ${sortedArray[i]}, prev element: ${
  //     sortedArray[i - 1]
  //   }`
  // );

  if (sortedArray[i] !== sortedArray[i - 1]) {
    // console.log("Unique value: ", sortedArray[i]);
    removeDuplicates.push(sortedArray[i]);
  }
}

console.log("Unique Values: ", removeDuplicates);

// H.W
// 1. sort with filter method
