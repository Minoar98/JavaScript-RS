// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print the sum of numbers from index = 2 to index = 6.


function reducers(prevSum, curr, index) {
    if(index >= startIndex && index <= endIndex) {
        return prevSum + curr;
    } else {
        return prevSum;
    }

}

function printSumOfNumbers(arr) {
   const sum = arr.reduce (reducers,0);
   return sum;

}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const startIndex = 2, endIndex = 6;
const result = printSumOfNumbers(arr);
console.log(result) 