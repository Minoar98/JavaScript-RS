const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
 //alternative
const cars1 = new Array("Saab", "Volvo", "BMW");
console.log(cars1[1]);

const cars2 = ["Saab", "Volvo", "BMW"];
cars2[0] = "Opel";
console.log(cars2);

//Converting an Array to a String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

//Converting an Array to a String
const song = ["Dushor Shomoy", "Oniket Prantor", "Anmone","Hashimukey"];
console.log(song.toString());

// full array

const cars4 = ["Saab", "Volvo", "BMW"];
console.log(cars4);

//array as an a object
const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:46
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

//length property

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits5.length;
console.log(size);

//Accessing the First Array Element
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits6[0];
console.log(fruit);

////Accessing the last Array Element

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
let fruit1 = fruits7[fruits7.length - 1];
console.log(fruit1);

//Adding Array Elements

const fruits8 = ["Banana", "Orange", "Apple"];
fruits8.push("Lemon");  // Adds a new element (Lemon) to fruits
console.log(fruits8);

// array length property

const fruits9 = ["Banana", "Orange", "Apple"];
fruits9[fruits9.length] = "Lemon";  // Adds "Lemon" to fruits
console.log(fruits9);

const fruits10 = ["Banana", "Orange", "Apple"];
fruits10[6] = "Lemon"; 
console.log(fruits10);