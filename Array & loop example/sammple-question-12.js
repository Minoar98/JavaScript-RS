// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Print the maximum number of odd indexed numbers

const findMaxOddIndexNumber = (array) => {
    let max = -Infinity;
    for(let i = 1; i < array.length; i+=2) {
        if(array [i] > max) {
             // console.log(array[i] + ' ' + i);
            max = array[i];
        }         
    }
    console.log("The maximum number of odd-indexed  is:", max);
}

const array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
findMaxOddIndexNumber(array);