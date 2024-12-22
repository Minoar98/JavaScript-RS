// .[-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print the sum of odd indexed numbers.

function printSumOfOdd(arr) {
    let count = 0;
    const sum = arr.reduce((prev, curr, index)=> {
        if(index % 2 === 1){
            count++;
            return prev + curr;
        } else {
            return prev;
        }
    }, 0)
    return sum;

}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const result = printSumOfOdd(arr);
console.log(result);