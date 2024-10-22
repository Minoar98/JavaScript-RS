 const Actress = {
    name:"Rashmika Mandarin",
    age: 28,
    ispresent:true,
    lastMoviesNum: 10,
    totalMoviesNum : function(){
        return this.lastMoviesNum + 50;
    }
 }
 console.log (Actress.totalMoviesNum())
 console.log(Actress);

 // A function has  parameter
const myValue =(val1, val2) => {
    console.log(val1 - val2);
}
myValue(40, 50);


//Convert Fahrenheit to Celsius
function toCelcius(fahrenheit){
    return (fahrenheit - 32) * 5/9
}
console.log(toCelcius(32));

// converted arrow function
const toCelcius1 = (fahrenheit) => {
    return (fahrenheit -32) * 5/9
}
console.log(toCelcius1(32));

//Default parameter
function myFavName(name = "Ricky Pointing"){
    console.log(name);
}
myFavName("Michale Clarke");

//converted it arrow function
const myFavName1 = (name = "Ricky Pointing") =>{
    console.log(name);
}
myFavName1("Michale clarke");

// default parameter
function myFood (name1, name2 ="kalavuna"){
    console.log(name1);
    console.log(name2);
}
myFood("Elish polao", "Duck curry")

//converted it arrow function
const myFood1 = (name1, name2 = "Beef khala vuna") => {
    console.log(name1);
    console.log(name2);
}
myFood1("Elish polao", "Duck curry");

//A function called “increment” takes a number and returns the number incremented by x. (by default x will be 1)

function increment(num, x = 1){
    return num + x ;
}
console.log(increment(10));
console.log(increment(15, 3));

const increment1 =(num, x = 1) => {
    return num + x;
}
console.log(increment1(10));
console.log(increment(15,3));

//////A function takes a number & returns a boolean if a number is divisible by 10

function myNum1 (num, x = 10) {
    return (num % x === 0);
}

console.log(myNum1(10));
console.log(myNum1(15));

// converted it arrow function

const myNum2 = (num, x = 10) =>{
    return (num % x===0)
}
console.log(myNum2(20));
console.log(myNum2(25));