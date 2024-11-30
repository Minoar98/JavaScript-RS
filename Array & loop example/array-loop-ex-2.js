// 2. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Count even numbers.

const countEvenNumber = (array) => {
    let count = 0; 
    for (let i = 0; i < array.length; i++) { 
        if (array[i] % 2 === 0) { 
            // console.log(array[i])
            count++;  
        }  
    }
    console.log(count); 
};

let arr = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
countEvenNumber(arr)
// console.log("even numbers are", number); 
