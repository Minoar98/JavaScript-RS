// Primitive VS Reference

let person = {
    name: 'Sakib',
    age: 32
}

let player = person; // assign

// console.log(person);
// console.log(player);

player.age = 50; // Update, mutation

// console.log(person);
// console.log(player);

person = {age: 30}; // re-assign

console.log(person);
console.log(player);


//primative

let x = 5;
let y = x;

x = 10;
console.log(x);
console.log(y);

//references
let obj1 = {name:"Tasnia Farin"};
let obj2 = obj1;



obj1.name ="Aymaan Sadia";


console.log(obj1.name);
console.log(obj2.name);

let singer = {
    name: "Taylor-Swift",
    age : 32,
}

let person1 = singer;

singer.age = 35;

person1 ={age:28};

console.log(singer);
console.log(person1);

let footballPlayer = {
    name:"Lionel Messi",
    age: 38,
}

let person2 = footballPlayer;

footballPlayer.age = 32;

person2 ={age:35};

console.log(footballPlayer);
console.log(person2);


let actor = {
    name: "Amir Khan",
    age :50,
    bestMovie:"3 idiots",
}

let person3 = actor;
person3.bestMovie = "tare zameen par";
actor = {bestMovie:"Dhoom3",}

console.log(actor);
console.log(person3);


let actress = {
    name:"Rashmika Mandarin",
    age: 27,
    bestMovie:"Bishma",
}
let women = actress;

women.bestMovie = "Pushpa";
 actress = {bestMovie:"Geeta Govinda"}

 console.log(actress);
 console.log(women);