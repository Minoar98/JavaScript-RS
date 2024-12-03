// 6. [-10, 20, -44, 35, 65] is an array. Find 20 in that array. 
// If not found then print '20 is not found' message. (using binary search)

const binarySearch20 = (arr, target) => {
   
    let start = 0 ; end = arr.length-1;
    
    while (start <= end) {
        let mid = (start + end)/2;
        if(arr[mid] === target) {
            return target;
        }
        if(arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }
    return - 1
}

const target = 20;
const arr = [-10, 20, -44, 35, 65]
arr.sort(function (a, b) {return a- b})
console.log(arr)

const result = binarySearch20(arr, target)
// console.log(result);

if (result === -1) {
    console.log("20 is not found");
} else {
    console.log("Found:", result);
}