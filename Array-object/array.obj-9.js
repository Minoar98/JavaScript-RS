// [-10, 20, -44, 35, 65, 40, 22, -33, 51, 9] is an array. 
// Print the sum of numbers which are greater than 10.

function reducers(prev, curr) {
    if(curr > 10) {
        return prev + curr
    } else {
       return prev 
    }
}

function sumOfNumbers (arr) {
    const printSumOfNumbers = arr.reduce(reducers, 0)
    return printSumOfNumbers;
}


const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, 9]
const printSumOfNumbers = sumOfNumbers(arr);
console.log(printSumOfNumbers)
