//  [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Print the average of odd indexed numbers.

const avgOfEvenIndexedNumbers =(array) => {
    let sum = 0;
    let count = 0; 

    for (let i = 1; i < array.length; i += 2) { 
        sum += array[i]; 
        count++; 
    }

    let average = sum / count; 
    console.log("The average of odd-indexed  is:", average);
}

const array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
avgOfEvenIndexedNumbers(array);
