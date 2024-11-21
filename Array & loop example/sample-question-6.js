// 6. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Print the sum of positive numbers.

const array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
let positiveSum = 0;

for (let i = 0; i < array.length; i++){
    if(array[i] > 0){
        positiveSum += array[i]
    }
}

console.log("Sum of positive numbers:", positiveSum);

// todo while loop

let positiveSum1 = 0;
let j = 0;
while (j < array.length) {
    if (array[j] > 0) {
        positiveSum1 += array[j];
    }
    j++;
}

console.log("Sum of positive numbers (while loop):", positiveSum1);
