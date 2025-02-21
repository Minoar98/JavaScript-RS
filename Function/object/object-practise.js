const person = {
  firstName: "Lord",
  lastName: "Shanto",
  age: 25,
  duck: 0,
  eyecolor: "Black",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
person.todayRun = 0;
person["isPresent"] = "Yes";
delete person.age;
delete person["eyecolor"];
person["captainc:120"];
console.log(person);
console.log(person.fullName());

//primitive and references

let sportsMan = {
  name: "Cris Gayle",
  age: 25,
};

let cricketer = sportsMan;
sportsMan.age = 39;
cricketer = { age: 35 };
console.log(cricketer); // refernces

console.log(sportsMan); // primative

let myFavActor = {
  name: "Amir Khan",
  age: 52,
  bestMovie: "Dhoom-3",
};
let actor = myFavActor;
actor = { bestMovie: "3 idiots" };
myFavActor.bestMovie = "Tare jammen par";
console.log(myFavActor); //primative
console.log(actor); // reference
