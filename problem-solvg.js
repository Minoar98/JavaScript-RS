// const time = new Date().getHours();
// let greeting;
// if (time < 30) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting)

let age = 50;

if(age < 20){
    console.log("You are young");
} else if(age == 18){
    console.log("You are adult");
} else if(age > 18 && age < 30){
    console.log("You are matuerd");
} else {
    console.log("You are old")
}

let num = 4

if(num === 1){
    console.log("Send money")
} else if (num === 2) {
    console.log("Mobile recharge")
} else if (num === 3){
    console.log("cash out")
} else{
    console.log("log out")
}

let hour = 18;
if(hour < 12 ){
    console.log("Good morning")
} else if (hour < 18){
    console.log("Good afternoon")
} else{
    console.log("Good evening")
}

let temparature = 30;

if(temparature > 0 && temparature < 35){
    console.log("The temparature is moderate")
} else {
    console.log("The temparature is extreme")
}

let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in");
}


// let number = 14;

// if (number % 3 === 0) {
//     console.log("The number is divisible by 3");
// } else {
//     console.log("The number is not divisible by 3");
// }


// function printMyName(name = 'ice-cream') {

//     console.log(name);
// }

// printMyName('adda');

function myCountry(name ="Bangladesh"){
    console.log(name);
}
myCountry("USA")

// primitive & references

let singer = {
    fullName:"Chester Benington",
    age : 48,
    isPresent: false,
    bestSong: "In the end",
}

let favSinger = singer;
favSinger.bestSong =("Bleed it out");
singer = {bestSong : "Leave out all the rest"};

console.log(favSinger);
console.log(singer);