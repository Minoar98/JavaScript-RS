// [-20, 50, -34, 55, 95] is an array. 
// Find the difference between maximum & minimum number. (use function & loop)

const findDifference = (arr) => {
    let max = -Infinity;
    let min = Infinity;
    
    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    // console.log(max); 
    // console.log(min)
   return max-min

}

const arr = [-20, 50, -34, 55, 95] ;
console.log(findDifference(arr));
