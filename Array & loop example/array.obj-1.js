// [6, 3, 9, 2, 3] is the array. find the average of that array.

function findAverage(arr) {
    const sum = arr.reduce((previousValue, presentValue)=> previousValue + presentValue);
    return sum / arr.length;
}


const arr = [6, 3, 9, 2, 3]
const avgValue = findAverage(arr);
console.log(avgValue);
