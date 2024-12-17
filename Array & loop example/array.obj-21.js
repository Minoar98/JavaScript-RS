// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Find the 2nd lowest element.


// function findSecondLowest(arr) {
//   let min = Infinity;
//   let min1 = Infinity;
//   return arr.find((value) => {
//     if (min > value) {
//       return (min = value);
//     }
//     if (value < min && value > min1) {
//       return (min1 = value);
//     }
//   });
//   console.log(min);
// }

// const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
// const result = findSecondLowest(arr);
// console.log(result);


 const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];


arr.sort(function (a, b) {
  return b - a; 
});


console.log("2ndLowest value:", arr[arr.length - 2]);