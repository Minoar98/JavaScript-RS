// [22, 76, 54, 40, 99] is the array. find the minimum value

function findMinValue(arr) {
    let min = Infinity;
    arr.map(value => {
        if(value < min ) {
            min = value;
        }
    });
    return min;
}

const arr = [22, 76, 54, 40, 99]
const minValue = findMinValue(arr);
console.log(minValue)