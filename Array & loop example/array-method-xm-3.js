// [-1, 2, -3, 4, -5]
// Convert positive numbers if you find negative numbers & prepare the new array.

function convertPosNum(arr) {
    return  arr.map((value) => {
        if(value < 0) {
            return -(value);
        } else  {
            return value
        }
    })

}

const arr = [-1, 2, -3, 4, -5, 0];
const result = convertPosNum(arr);
console.log(result);