// 4. [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] is an array. 
// Print every elements of an array after multiplying 2 of each elements.


const arr = (array) => {
    for(let i = 0; i < array.length; i++) {
        array[i]*= 2;
        console.log(array[i]);
    }
}

const array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39] ;
arr(array)