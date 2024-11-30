// 3. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print every elements of an array after adding 5 of each elements.

const arr = (array) => {
    // let count = 0;
    for(let i = 0; i < array.length; i++) {
        array[i]+=5;
        console.log(array[i]);
        // count+5;
    }
}


const array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39]
arr(array);