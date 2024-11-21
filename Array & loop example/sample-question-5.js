// 5. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Count negative numbers.

const countNegNumber = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
          count++;
          console.log(arr[i]);
        }
    }

    return count;
}

let arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
let count = countNegNumber(arr);

console.log("Number of negative numbers:", count);
