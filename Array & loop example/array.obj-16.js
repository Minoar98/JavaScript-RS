// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Find the 2nd largest element.

// function findSecondLargest(arr){
//     let max = -Infinity;
//     let max1 = -Infinity;
//      return arr.find((value) => {
//         if(max < value) {
//           return  max = value
//         }
//         if (value < max && value > max1) {
//            return max1 = value
//         }
//     })
//     console.log(max);

// }

// const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39]
// const result = findSecondLargest(arr)
// console.log(result)

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];

arr.sort(function (a, b) {
  return a - b;
});

console.log("2ndLargest value:", arr[arr.length - 2]);
