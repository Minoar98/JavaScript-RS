// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print the maximum number of odd indexed numbers.

function printMaxNumOfODDIndex(arr){
    let max = -Infinity
     arr.forEach((value, index) => {
        if(index % 2 === 1 &&  value > max) { 
           max = value;
        } 
    });
    return max;
}


const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const result = printMaxNumOfODDIndex(arr)
console.log(result);