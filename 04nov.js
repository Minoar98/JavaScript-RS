// arr = [1, 2, 3, 4, 5], print all the even numbers using for & while loops
const startTime = performance.now();
let arr =  [1, 2, 3, 4, 5];
for(let i = 1; i < arr.length; i += 2){
    // if(arr[i] % 2 === 0) {
        console.log(arr[i]);
    // }
}

// const startTime = performance.now();
const endTime = performance.now();
console.log(`Loop took ${endTime - startTime} milliseconds to finish`);