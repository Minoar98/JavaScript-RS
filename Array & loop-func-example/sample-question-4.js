// 4. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Count positive numbers.

let array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];

let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i]> 0) {
        count++;
        console.log(array[i]);
    }
}

console.log("Number of positive numbers:", count);

// TODO: using while loop
let count1 = 0;
let j = 0;
while(j < array.length) {
    if(array[j] > 0){
        console.log(array[j])
        count1++;
    }
    JSON++;
}

console.log("Number of positive number:", count1);