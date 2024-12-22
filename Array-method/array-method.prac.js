// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print the sum of even indexed numbers.

function printSumOfEvenIndexNumb(arr) {
    const sum = arr.reduce((prev, curr, index) => {
        if(index % 2 === 0) {
            return prev + curr;
        } else {
            return prev;
        }
    }, 0)
    return sum;
}


const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const result = printSumOfEvenIndexNumb(arr)
console.log(result);