// [-10, 20, -44, 35, 65, 40, 22, -33, 51, 9] is an array. Print the sum of numbers which are greater than 10.

const sumOfNumbers = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < 10){
            sum += array[i]
            console.log(sum)
        }
    }
   
}

const array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, 9];
sumOfNumbers(array)