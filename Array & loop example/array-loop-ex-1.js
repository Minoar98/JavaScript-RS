// 1. [-11, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Count odd numbers.

const countOddNumber = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) { 
        if(arr[i] % 2 ===1) {
            // console.log(arr[i])
            count++;
        }
    }
    console.log(count)
};

let arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
countOddNumber(arr)
// console.log("Odd numbers are", number); 

// [1, 2, 3] = 2;
// [2, 4, 6, 8] = 0;

