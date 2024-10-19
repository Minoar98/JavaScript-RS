//Convert Fahrenheit to Celsius

function toCelcius(fahrenheit){
    return (fahrenheit - 32) * 5/9
}
console.log(toCelcius(32));


const cricketer = {
    name: "Sachin Tendulkar",
    age : 42,
    isPresent: false,
    odiCentury: 49,
    testCentury: 51,
    totalCentury :function(odiCentury, testCentury){
        return this.odiCentury + this.testCentury
    }
}

delete cricketer["isPresent"]
cricketer.t20Century = 0;
console.log(cricketer);
console.log(cricketer.totalCentury());

//Default parameter
function myFavName(name = "Tasnia"){
    console.log(name);
}
myFavName("Farin")

function myBook(num = 5, name ="Arches"){
    console.log(num)
    console.log(name)

}
myBook(2, "Harry-Potter");

function favBand(num, name ="Greenday"){
    console.log(num);
    console.log(name)
}
favBand(10, "Link in Park");

// primative and reference

let favcricketer = {
    name: "AB de villers",
    age: 38,
    battingStyle:"Right-handed",
    isPresent: "false",
}
let sportsMan = favcricketer;

sportsMan.isPresent = "true"

favcricketer = {isPresent:"false"};

console.log(favcricketer);
console.log(sportsMan);



//primative

let x = 5;
let y = x;

x = 10;
console.log(x);
console.log(y);

//references
let obj1 = {
    name: "Tasnia Farin"
};
let obj2 = obj1;

obj1.name ="Aymaan Sadia";


console.log(obj1.name);
console.log(obj2.name);

////A function takes first & last name in a function then return full name
function fullName(firstName, lastName){
    return `${firstName} ${lastName}`

}
console.log(fullName("Amir", "Khan"));

// A function takes a name & print 'Greetings x'.
function myName(name){
    console.log(`Greetings ${name}`)
}
myName("Minoar")

//A function takes a negative number & returns after converting same number as a positive number.

function myNumber(num) {
    return -(num); // 
}

console.log(myNumber(-10));

//subtract
function subTract(a, b){
    return a - b
}
console.log(subTract(50, 47));
//multiply

function multiPly(a, b){
    return a * b
}

console.log(multiPly(50, 10));

// divide
function divide(a, b){
    return a / b
}
console.log(divide(65, 5));

// IIFE
(function myCountry() {
    console.log('Hello, Bangladesh!');
  })()

//IIFE
  (function mySports(){
    console.log("Cricket")
  })()


  