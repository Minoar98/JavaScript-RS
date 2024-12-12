// [10, 15, 20, 22, 45, 56, 3, 7, 12]
// StartIndex = 2, EndIndex = 6

// 1. Sum
// 2. Avg


function printSumAvg(arr){
    let count = 0;
    const sum = arr.reduce((prev, curr, index) => {
        if(index >= StartIndex && index <= EndIndex) {
            count++;
            return prev + curr;
        } else {
            return prev
        }
    },0)

    console.log(sum);
     return   sum / count 
     

}
const arr = [10, 15, 20, 22, 45, 56, 3, 7, 12];
const StartIndex = 2; EndIndex = 6;
const result = printSumAvg(arr);
console.log(result);