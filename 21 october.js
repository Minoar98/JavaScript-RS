//1. A function that takes km as input & returns in miles.
function convertKm(num){
    return num *  0.621371;
}
// console.log(convertKm(300));

//2. A function called “greetings” takes a name & returns ‘Greeting x’.

function greetings(name = "Newyork"){
    // console.log(name);
    return `Greeting ${name}`
}
// console.log(greetings("Chicago")) ;
// console.log(greetings()) ;
const myGreetings = greetings("Chicago");
// console.log(myGreetings);

const myGreeting = greetings();
// console.log(myGreeting);

//A function takes three numbers & returns the average of three numbers.

 function myNumber (num1, num2, num3){
    return (num1 + num2 + num3) / 3
 }
//  console.log(myNumber(10, 20, 60));
//A function takes a number & returns a boolean if a number is divisible by 10

function myNum(num, x = 10){
    if(num % x === 0){
        return true;
    } else {
        return false;
    }
}
console.log(myNum(10));
console.log(myNum(15));

// alternative
function myNum(num, x = 10){
    return (num % x === 0)
}
console.log(myNum(10));
console.log(myNum(15));

//A function called “increment” takes a number and returns the number incremented by x. (by default x will be 1)

function increment(num, x = 1){
    return num + x ;
}
console.log(increment(10));
console.log(increment(15, 3));


const favCricketer = {
    name:"Sachin Tendulkar",
    odiCentury: 49,
    testCentury: 51,
    totalCentury : function(){
        return this.odiCentury + this.testCentury
    }
}
console.log(favCricketer);
console.log(favCricketer.totalCentury())