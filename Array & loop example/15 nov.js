//[-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. Print the sum of odd indexed numbers.

const oddNumber = (array) =>{
    let sum = 0;
    for(let i = 1; i < array.length; i+=2){
        // console.log(array[i])
        sum += array[i]
    }
    console.log(sum);
}

const array =[-10, 20, -44, 35, 65, 40, 22, -33, 51, -39];
oddNumber(array)