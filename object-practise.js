// // person.name = function () {
// //     return (this.firstName + " " + this.lastName).toUpperCase();
// //   };

//   const person = {
//      firstName:"Moonim",
//      lastName:"Rahman",
//      age: 25,
//      eyeColor:"black",
//      "last-travel-history":"sylhet",
//      "occupation":"student",
//      fullName: function () {
//         // console.log `(${this.firstName}${this.lastName})`
//         return `${this.firstName} ${this.lastName}`

//      }

//   }
//      delete person["last-travel-history"]
//      delete person.occupation
//      delete person["eyeColor"]
//      delete person["age"]
//     //  person.age = 30;

//  console.log(person);
//    console.log(person.fullName());
// //   myObj.myCars.car2;
// //   myObj["myCars"]["car2"]

// const greet = function(name){
//     // return "Hello" + name + "!"
//     return `Hello ${name}!`

// };

// console.log(greet ("Tasnia"));

// function add(a, b) {
//     return a + b

// }

// const results =  add(5, 3);
// console.log(results + " " +"will be");

// function greatJob(office){
//     return "work form" + " " +office + "!"
// }

// const messages = greatJob("home")
// console.log(messages + "5 days in a week");

// function greatJob() {
//     return `work form`;
// }

// const message = greatJob("home"); // 'home' is passed as the argument
// console.log(message); // Output: work from home!

// (function myFunction() {
//     console.log('Hello, World!');
//   })()

// function myFunction() {
//     console.log('Hello, World!');
//   }

//   function toCelcius(f){
//     return 5/9 *(f-32)
//   }

//   let value = toCelcius();
//   console.log(value);

//   function toCelcius(farhenheit){
//     return 5/9 * (farhenheit-32);
//   }

//   let value1 = toCelcius();
//   console.log(value1);

// //   function fullName() {
// //     const firstName = "King";
// //     const lastName = "Khan";
// //     console.log(`${firstName} ${lastName}`);
// // }
// // fullName()

// //as a small as possible. do a single work
// function fullName(){
//   console.log("Bangladesh");
// }

// // no argument . nothing returned

// function fullName1(firstName, lastName){
//   return `${firstName} ${lastName}`;
// }
// console.log(fullName1("Akib", "walik"));

const sportsMan = {
  firstName: "Sachin",
  lastName: "Tendulkar",
  cenCury: 80,
  totalCencury: function () {
    return `${this.cenCury + 20} both odi and test`;
  },
};

console.log(sportsMan.totalCencury());
console.log(sportsMan);

// const footBaller ={
//   name: "Cristiano Ronaldo",
//   age: 38,
//   total1seasonGoals:35,
//   totalGoals:function(){
//     return `${this.total1seasonGoals + 700} goals`
//   }
// }

// delete footBaller.age

// console.log(footBaller.totalGoals());
// console.log(footBaller);

function addNumber(num1, num2) {
  return num1 + num2;
}

const myNumber = addNumber(5, 3);
console.log(myNumber);

function subNumber(a, b) {
  return a - b;
}
// const myFavNumber = subNumber(5, 3)
const myFavNumber = subNumber(5, 3);
console.log(subNumber);
console.log("Hello world");
