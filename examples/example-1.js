// 1. A function called "maxOfTwo" takes two numbers as parameters and returns the largest of the two.

function maxOfTwo(num1, num2){
    if(num2  > num1){
        return num2
    }
}
console.log(maxOfTwo(10, 20));

//space cilo

//convert arrow function
const maxOfTwo1 = (num1, num2) =>{
    if(num2 > num1){
        return num2
    }
}
console.log(maxOfTwo1(10,20));