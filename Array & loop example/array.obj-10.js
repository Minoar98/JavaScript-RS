// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array.
//  Print the sum of even indexed numbers.

function reducers(prev, curr, index) {
    if(index % 2 === 0) {
        return prev + curr
    } else {
        return prev
    }
}

function sumOfEvenIndexNum (arr) {
    const printSumOfEvenIndexNumb = arr.reduce(reducers, 0) ;
    return printSumOfEvenIndexNumb;
}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const printSumOfEvenIndexNumb = sumOfEvenIndexNum(arr)
console.log(printSumOfEvenIndexNumb);