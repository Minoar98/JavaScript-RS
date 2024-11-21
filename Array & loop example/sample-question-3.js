// 3. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Print only negative numbers.

let array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];

 for(let i = 0; i < array.length; i++){
    if(array [i] < 0){
        console.log(array[i]);
    }
 }

 let j = 0;
 while(j < array.length){
    if(array[j] < 0){
        console.log(array[j]);
    }
    j++;
 }