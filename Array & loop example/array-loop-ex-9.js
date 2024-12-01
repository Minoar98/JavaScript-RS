// 5. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Find the 2nd largest element.

const secondLargest = (arr) => {
    let max = -Infinity;
    let max1 = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i]
        }
        if(arr[i] < max && arr[i] > max1) {
            max1 = arr[i]

        }
        
    }
    console.log(max1)

}

const arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
secondLargest(arr)