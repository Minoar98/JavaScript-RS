// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print every elements of an array after adding 5 of each elements.

function myFunc (value) {
    return value + 5;
}
const array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
const numbers = array.map(myFunc);
console.log(numbers);
