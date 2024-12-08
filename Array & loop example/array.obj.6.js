//  [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array.
//  Print the sum of positive numbers.

// Callback functions
// 1. Previous value
// 2. Current/Present value
// 3. Index of current/present value
// 4. Full array
function reducer(prev, curr) {
    if (curr > 0) {
        // Positive numbers
        return prev + curr;
    } else {
        // Negative numbers
        return prev;
    }
}

function reducer2(prev, curr) {
    return curr > 0 ? prev + curr : prev;
}

function findSumOfPositiveNumbers(arr) {
    const sumOfPositiveNumbers = arr.reduce(reducer2, 0);
    return sumOfPositiveNumbers;
}

// const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const arr = [-10, 20, 50];
const sumOfPositiveNumbers = findSumOfPositiveNumbers(arr);
console.log(sumOfPositiveNumbers);