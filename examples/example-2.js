//2. A function called "minOfTwo" takes two numbers as parameters and returns the smallest of the two.

function minOfTwo(num1, num2){
    if(num1 < num2){
        return num1
    }
}
console.log(minOfTwo(30, 45));

//space cilo
//conver arrow function
const minOfTwo1 = (num1, num2) =>{
    if(num1 < num2){
        return num1
    }
}
console.log(minOfTwo1(30,45));