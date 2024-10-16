

// person.name = function () {
//     return (this.firstName + " " + this.lastName).toUpperCase();
//   };


  const person = {
     firstName:"Moonim",
     lastName:"Rahman",
     age: 25,
     eyeColor:"black",
     "last-travel-history":"sylhet",
     "occupation":"student",
     fullName: function () {
        // console.log `(${this.firstName}${this.lastName})`
        return `${this.firstName} ${this.lastName}`

     }

  }
     delete person["last-travel-history"]
     delete person.occupation
     delete person["eyeColor"]
     person.age = 30;

 console.log(person);
   console.log(person.fullName());
//   myObj.myCars.car2;
//   myObj["myCars"]["car2"]


const greet = function(name){
    // return "Hello" + name + "!"
    return `Hello ${name}!`

};

console.log(greet ("Tasnia"));


function add(a, b) {
    return a + b

}

const results =  add(5, 3);
console.log(results + " " +"will be");

function greatJob(office){
    return "work form" + " " +office + "!"
}

const messages = greatJob("home")
console.log(messages + "5 days in a week");



function greatJob(office) {
    return "work from " + office + "!";
}

const message = greatJob("home"); // 'home' is passed as the argument
console.log(message); // Output: work from home!



(function myFunction(value = "A") {
    console.log('Hello, World!');
  })()


  function toCelcius(f){
    return 5/9 *(f-32)
  }

  let value = toCelcius();
  console.log(value);

  function toCelcius(farhenheit){
    return 5/9 * (farhenheit-32);
  }

  let value1 = toCelcius();
  console.log(value1);