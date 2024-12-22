//3. [42, 26, 74, 80, 49] is the array. find the maximum value of that array using for & while loop.
let arr = [42, 26, 74, 80, 49];
let max = -1000;

for(let i = 0 ; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log(max);

// while loop

let z = 0;
while(z < arr.length){
    if(max < arr[z]){
        max = arr[z];
    }
    z++;
}
console.log(max);