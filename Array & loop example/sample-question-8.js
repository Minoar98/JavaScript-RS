//[-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Print the sum of numbers from index = 2 to index = 6.

const sumOfNumbers = (arr, startIndex, endIndex) =>{
    let sum = 0;
    for(let i = startIndex; i <= endIndex; i++ ){
        sum += arr[i];
    }
    console.log(sum);
}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const startIndex = 2, endIndex = 6;
sumOfNumbers(arr, startIndex, endIndex);