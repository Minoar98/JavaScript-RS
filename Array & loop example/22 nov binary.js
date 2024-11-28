// 1. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Find the 2nd largest element.
// 2. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Print the array in reverse order.



const arr = (array) => {
    for(let i = array.length-1; i >= 0 ; i--) {
        console.log(array[i]);
    }
}
const array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
arr(array)