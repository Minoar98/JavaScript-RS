// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Find the 2nd lowest element.

const find2ndLowest = (arr) => {
    let min = Infinity;
    let min1 = Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
        if(arr[i] > min && arr[i] < min1) {
            min1 = arr[i]
        }
    }
    console.log(min1)
}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
find2ndLowest(arr);