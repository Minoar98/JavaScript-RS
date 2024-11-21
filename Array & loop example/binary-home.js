//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];



const binarySearch =(array,target) => {
    let start = 0; 
    let end = array.length - 1;
    while(start <= end){
        let mid = (start + end) /2
        if(array[mid]===target){
            return mid;
        }
        if (array[mid] < target){
            start = mid + 1;
        } else {
            start = mid -1

        }
    }
    return-1 // target is not found
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let target = 6;
let result = binarySearch(array, target)

if (result === -1) {
    console.log('Not Found');
  } else {
    console.log(`Found at index ${result}`);
  }
  