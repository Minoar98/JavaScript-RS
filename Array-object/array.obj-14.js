// 18. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print the minimum number of even indexed numbers.


function printMaxNumOfEvenDIndex(arr){
    let min = Infinity
     arr.forEach((value, index) => {
        if(index % 2 === 0 && value < min) { 
          min = value;
        } 
    });
    return min;
}


const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const result = printMaxNumOfEvenDIndex(arr)
console.log(result);