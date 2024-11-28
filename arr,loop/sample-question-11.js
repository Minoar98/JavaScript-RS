// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Print the maximum number of even indexed numbers.

const maxEvenIndexNumber = () => {
    let max = -Infinity;
    for(let i = 0; i < array.length; i+= 2) {
        if(array[i] > max) {
             // console.log(array[i] + ' ' + i);
            max = array [i];
        }
    }
    console.log("The maximum number of even-indexed is:", max);
}

const array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39]
maxEvenIndexNumber(array)