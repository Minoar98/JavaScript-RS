// [1, 2, 3, 4, 5, 6, 6, 6, 8, 9] is an array. 
// Print the upper bound of 6 (first meet position from right) (using both linear & binary search)

// binar search

const upperBound = (arr, target) => {
    let start = 0; end = arr.length - 1;
    while(start <= end) {
        let mid = (start + end) / 2
        if(arr[mid] === target) {
            return 1;
        }
        if(arr[mid] < target) {
            start = mid - 1;
        } else {
            end = mid + 1;
        }
    }
     return -1
}

const arr = [1, 2, 3, 4, 5, 6, 6, 6, 8, 9];
let target = 6
const result = upperBound(arr, target)
console.log(result);
