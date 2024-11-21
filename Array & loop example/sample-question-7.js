//7. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Print the sum of negative numbers.

let array =  [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
let negSum = 0;

for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
        negSum += array[i];
    }
}

console.log("Sum of negative number of:", negSum);

// while loop
let negSum1 = 0;
let j = 0;

while (j < array.length) {
    if (array[j] < 0) {
        negSum1 += array[j];
    }
    j++;
}

console.log("Sum of negative numbers:", negSum1);
