//A function called "isEven" takes in a number as a parameter and returns true if the number is even, and false if the number is odd
// //1. normal function
// 2. arrow function
// 3. normal with default
// 4. arrow with default


function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}
// console.log(isEven(10));
// console.log(isEven(15));
 
// arrow function
const isEven1 = (num) => {
    if (num % 2 === 0) {
        return true;
    } else{
        return false;
    }
}
// console.log(isEven1(10));
// console.log(isEven1(15));

//A function called “isPositive” takes a number and returns true if the number is positive, otherwise returns false
function isPositive(num){
    if(num >= 0){
        return true;
    } else {
        return false;
    }
}
console.log(isPositive(20));
console.log(isPositive(-25));
console.log(isPositive(0));

function isPositive1(num){
    if(num >= 0){
        return true;
    } 
    
    return false;
}

function isPositive2(num){
    return num >= 0;
}
 