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
