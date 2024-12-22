//[-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Print the sum of even indexed numbers.

const evenNumbers = (arr) => {
    let sum = 0;
    for(let i = 0 ; i < arr.length; i += 2){
        // console.log(arr[i] + ' ' + i);
        sum += arr[i];
    }

    console.log(sum);
}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
evenNumbers(arr)

// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39]
// [  0,  1,   2,  3,  4,  5,  6,  7,   8,  9 ] // Index

// // Even indexed
// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39]
// [  0,  -,   2,  -,  4,  -,  6,  -,   8,  - ] // Highlight even indexed

// = -10 + (-44) + 65 + 22 + 51 = 84