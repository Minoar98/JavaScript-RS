// [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].TArget 60;

const binarySearch = (arr, target) => {
    let start = 0; end = arr.length
    while(start <=end) {
        let mid = (start + end) / 2;
        if(arr[mid] === target) {
            return mid;
        }
        if(arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid -1
        }
    }
    return -1

}
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let target = 55;
const index = binarySearch(arr, target)
console.log(index);

if(index === -1) {
    console.log(`Not found ${index}`)
} else {
    console.log(`Found at ${index}`)
}




