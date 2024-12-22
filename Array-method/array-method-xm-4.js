
// [-1, 2, -3, 4, -5, 0]
// Toggle all the elements & return the new array.

// [1, -2, 3, -4, 5, 0]

function toggleArr(arr) {
   return arr.map((value) => {
    if(value === 0) {
        return value
    } else  {
        return -(value);
    }
   })

}

const arr = [-1, 2, -3, 4, -5, 0];
const result = toggleArr(arr);
console.log(result);
