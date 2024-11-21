// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Print the minimum number of even indexed numbers.

const findMinEvenIndexNumber = () => {
    let min = 1000;
    for(let i = 0; i < array.length; i+= 2) {
        if(array[i] < min) {
             // console.log(array[i] + ' ' + i);
            min = array [i];
        }
    }
    console.log("The minimum number of even-indexed is:", min);
}

const array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39]
findMinEvenIndexNumber(array)

