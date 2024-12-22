//1. [1, 2, 3, 4, 5, 6, 6, 6, 8, 9] is an array. 
// Print the lower bound of 6 (first meet position from left) (using both linear & binary search)

// binary search
const lowerBound = (arr, target) => {
    let start = 0; end = arr.length;
    while(start <= end) {
        let mid = (start + end)/2
        if(arr[mid] === target) {
            return 1;
        } 
        if(arr[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return - 1

}

const arr = [1, 2, 3, 4, 5, 6, 6, 6, 8, 9]
let target = 6;

const result = (lowerBound(arr, target))
console.log(result)

// linear serach

const lowerBound1 = (arr1, target1) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return - 1
}

const arr1 = [1, 2, 3, 4, 5, 6, 6, 6, 8, 9]
let target1 = 6;

const resul1t1 = (lowerBound(arr, target))
console.log(resul1t1)








