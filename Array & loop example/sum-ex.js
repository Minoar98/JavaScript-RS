//1. [4, 2, 7, 8, 9] is the array. find the sum of that array using for & while loop.
let arr = [4, 2, 7, 8, 9];
let sum = 0;
 
for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    
}
console.log(sum);
let avg = sum / arr.length;
console.log(avg);