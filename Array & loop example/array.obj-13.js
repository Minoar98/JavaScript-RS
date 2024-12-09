// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print the average of even indexed numbers.


function printAvgOfIndNum(arr){
    let count = 0;
    const sum = arr.reduce((prevSum, curr, index) => { 
        if(index % 2 === 0) {
            count++;
            return prevSum + curr
        } else {
            return prevSum;
        }
    }, 0)
    return sum / count;
}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const result = printAvgOfIndNum(arr);
console.log(result)