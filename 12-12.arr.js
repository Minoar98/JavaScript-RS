// [10, 15, 20, 22, 45, 56, 3, 7, 12]
// StartIndex = 2, EndIndex = 6

// 1. Sum
// 2. Avg


// function printSumAvg(arr) {
//     let count = 0;
//   const sum = arr.reduce((prev, curr, index) => {
//         if(index >= StartIndex && index <= EndIndex) {
//             count++;
//             return prev + curr;
//         } else {
//             return prev
//         }
//     },0)
//     console.log(sum);

//     return sum / count;

// }

// const arr = [10, 15, 20, 22, 45, 56, 3, 7, 12];
// const StartIndex = 2, EndIndex = 6
// const result = printSumAvg(arr) ;
// console.log(result);





// [10, 15, 20, 22, 45, 56, 3, 7, 12]
// don't consider, from StartIndex = 2 to EndIndex = 6.

// 1. Sum
// 2. Avg

// function printSumAvg(arr){
//     let count = 0;
//     const sum = arr.reduce((prev, curr, index) => {
//         if(index >= StartIndex && index <= EndIndex) {
//            return prev;
//         } else {
//             count++;
//             return prev + curr;
//         }
//     },0)

//     console.log(sum);
//      return   sum / count 
     

// }
// const arr = [10, 15, 20, 22, 45, 56, 3, 7, 12];
// const StartIndex = 2; EndIndex = 6;
// const result = printSumAvg(arr);
// console.log(result);



// [-1, 2, -3, 4, -5, 0]
// Convert positive numbers if you find negative numbers & prepare the new array.



// function convertPosNum(arr) {
//     return arr.map((value) => {
//         if(value < 0) {
//             return -(value)
//         } else {
//             return value
//         }
//     })

// }


// const arr1 = [-1, 2, -3, 4, -5, 0]
// const result1 = convertPosNum(arr1);
// console.log(result1)




// [-1, 2, -3, 4, -5, 0]
// Toggle all the elements & return the new array.

// [1, -2, 3, -4, 5, 0]


function toggleArr(arr) {
    return arr.map((value) => {
        if(value === 0) {
            return value;
        } else {
            return -value
        }
    })
}

const arr = [-1, 2, -3, 4, -5, 0];
const result = toggleArr(arr);
console.log(result); 