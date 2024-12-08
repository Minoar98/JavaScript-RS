// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print the sum of negative numbers.

function reducer(prev, curr) {
    if(curr < 0) {
        return prev + curr
    } else {
        return prev
    }
}

function reducer2 (prev, curr) {
    return curr < 1 ? prev + curr : prev;
}

function findSumOfNegNum(arr) {
    const sumOfNegNum = arr.reduce(reducer2, 0)
    return sumOfNegNum

}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const sumOfNegNum = findSumOfNegNum (arr);
console.log(sumOfNegNum);