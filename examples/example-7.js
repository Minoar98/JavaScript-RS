// /A function called "isEven" takes in a number as a parameter and returns true if the number is even, and false if the number is odd.

function isEven(num){
    if(num % 2 === 0){
        return true;
        } else {
        return false;
    }
}
console.log(isEven(20));
console.log(isEven(25));

// arrow function

const isEven1 = (num) => {
    if (num % 2 ==0) {
        return true;
    } else{
        return false;
    }
}
console.log(isEven1(10));
 console.log(isEven1(15));