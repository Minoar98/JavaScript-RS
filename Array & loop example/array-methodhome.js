// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print the sum of numbers from index = 2 to index = 6.

function printAvgOfIndNum(arr) {
    const sum = arr.reduce((prev, curr, index) => {
        if(index >= startIndex && index <=lastIndex) {
            return prev + curr;
        } else {
            return prev;
        }
    },0)
    return sum;
}



const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const startIndex = 2; lastIndex = 6;
const result = printAvgOfIndNum(arr)
console.log(result);
