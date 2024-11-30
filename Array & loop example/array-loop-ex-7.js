// [-20, 50, -34, 55, 95] is an array.
//  Find the sum & avg of maximum & minimum number. (use function & loop)

const findSumAvg = (arr) => {
    let max = -Infinity;
    let min = Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
        if(arr[i] < min) {
            min = arr [i]
        }
    }
    // console.log(max)
    const sum = max + min;
    const avg =(max + min)/2
    return(sum, avg)
}

const arr = [-20, 50, -34, 55, 95];
console.log(findSumAvg(arr));
