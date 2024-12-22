// [1, 2, 3, 4, 5, 6, 7, 8] is an array. multiply by 2 from index 2 to 6.
// Output: [1, 2, 6, 8, 10, 12, 14, 8]

// [1, 2, 3, 4, 5, 6, 7, 8] is an array. multiply by 2 only outside of the given index(2 to 6).
// Output: [2, 4, 3, 4, 5, 6, 7, 16]

function func(arr) {
    // console.log(arr);
    return arr.map((value, index) => {
        if(index >= startIndex && index <= endIndex) {
            return value;
        } else {
            return value * 2;
        }
    })
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const startIndex = 2; endIndex = 6;
const result = func(arr);
console.log(result);
