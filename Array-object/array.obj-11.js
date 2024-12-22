// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print the maximum number of even indexed numbers.

function printMaxNumOfEven(arr) {
    let max = -Infinity;
    arr.forEach((value, index) =>{
        if(index % 2 === 0 && max < value){
            max = value;
        }
    })
    return max;
}

function printMaxNumOfEven2(arr) {
    let max = -Infinity;
    arr.forEach((value, index) =>{
        // ternary operator
        max = (index % 2 === 0 && max < value) ? value : max;
    })
    return max;
}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const result = printMaxNumOfEven2(arr)
console.log(result)