// a function has no parameter
// arrow function
const myFunc = () => {
    console.log("My Bangladesh")
}
myFunc();

// A function has  parameter
const myFunc1 =(val1, val2) => {
    console.log(val1 + val2);
}
myFunc1(10, 20);

//// A function has  parameter (s) default value
const myFunc3 = (val1, x = 10) =>{
    console.log(val1 + x)
}
myFunc3(4);
myFunc3(4, 15)

//A function return something
const myFunc4 = (val1) => {
    return val1;
}
console.log(myFunc4(10));

// function 1 body line r
const myFunc5 = () => console.log("My country"); myFunc5()
const myFunc6 = (val1, val2) => console.log(val1 + val2); myFunc6(10, 30)
const myFunc7 =(val1, x = 10) => console.log(val1 + x); myFunc7(20);
const myFunc8 =(val1) => val1; myFunc8(30);

// 2 parameter no return
function barcPlayer (firstName, lastName){
    console.log(`${firstName} ${lastName}`)
  }
  barcPlayer("Lamal","Yamel");

// 2 parameter no return
const barcPlayer1 = (firstName, lastName) =>{
    console.log(`${firstName} ${lastName}`)
  }
  barcPlayer1("Lamal","Yamel");

  //A function takes a negative number & returns after converting same number as a positive number.

function myNumber(num){
    return -(num);
}
console.log(myNumber(-10));

//converted arrow

const myNumber1 = (num) =>{
    return -(num)
}
console.log(myNumber1(-20));

// A function called “greetings” takes a name & returns ‘Greeting x’.

function greetings(name = "Sunfrancisco"){
    return `Greeting ${name}`
}
console.log (greetings("Chicago"));
console.log(greetings("Newyork"))

////1. A function that takes km as input & returns in miles.convert arrow function

const convertKm = (num) =>{
    return num * 0.621371
}
console.log(convertKm(220));

////A function takes a number & returns a boolean if a number is divisible by 10

function myNum (num, x = 10){
    if (num % x === 0) {
        return true;
    } else{
        return false;
    }
}

console.log(myNum(10));
console.log(myNum(15));

// alternative

function myNum1(num, x = 10){
    return (num % x === 0)
}
console.log(myNum1(10));
console.log(myNum1(15));

//arrow function as convert as
const myNum2 = (num, x = 10) =>{
    if(num % x === 0){
        return true
    } else {
        return false
    }
}
console.log(myNum2(10));
console.log(myNum2(15));

// alternative 
const myNum3 =(num, x= 10) => {
    return (num % x === 0)
}
console.log(myNum3(10));
console.log(myNum3(15));

////A function called “increment” takes a number and returns the number incremented by x. (by default x will be 1)

function increment(num, x = 1){
    return num + x;
}
console.log(increment(10))
console.log(increment(15, 3))

// converted arrow function
 const increment1 = (num, x = 1) => {
    return num + x
 }
 console.log(increment1(10));
 console.log(increment1(15, 3));


 // while loop

let i = 1;
while(i <=10){
    if(i % 2 === 1)
        console.log(i)
    i++
}
 
