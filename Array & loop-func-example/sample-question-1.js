//1. [12, 0, 0, 4, 2, 0, 4, 0] is an array. Count how many zeros you find out.

const countZeros  = (arr) => {
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            cnt++;
        } 
    }

    return cnt;
}

let count = countZeros([12, 0, 0, 4, 2, 0, 4, 0]);
console.log(count);


