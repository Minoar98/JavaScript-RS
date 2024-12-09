// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print the sum of numbers from index = 2 to index = 6.

function reducers(prevSum, curr, index) {
    if (index >= startIndex && index <= endIndex) {
        return prevSum + curr;
    } else {
        return prevSum;
    }
}

function reducers2(prevSum, curr, index) {
    return (index >= 2 && index <= 5) ? prevSum + curr : prevSum;
} 

function sumOfNumbers(arr) {
    const printSumOfNumbers = arr.reduce(reducers, 0)
    return printSumOfNumbers
}

// const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39]

const arr = [10, 20, 30, 40, 50, 60, 70]
const startIndex = 3, endIndex = 5;
const printSumOfNumbers = sumOfNumbers(arr);
console.log(printSumOfNumbers)
