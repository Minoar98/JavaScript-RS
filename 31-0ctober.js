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