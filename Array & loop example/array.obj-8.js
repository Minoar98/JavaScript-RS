// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print the sum of numbers from index = 2 to index = 6.

function reducers (prev, curr, startIndex, endIndex) {
    return prev + curr ;
}


function sumOfNumbers(arr) {
    const printSumOfNumbers = arr.reduce(reducers)
    return printSumOfNumbers

}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39]
const startIndex = 2, endIndex = 6;
const printSumOfNumbers = sumOfNumbers(arr);
console.log(printSumOfNumbers)
