// 1.  create an object - done
// 2. property and method - done
// 3. two ways to access properties - x
// 4. call the method - done
// 5. delete properties in two ways.
// 6. add properties after creating object
// write an arrow function which returns "Hello JavaScript" (by default) or return as my command

//create an object
let player = {
  firstName: "Shakib", //property and method
  lastName: "Al Hasan",
  isPresent: 0,
  age: 38,
  lastfiveinnings: [82, 60, 50, 20, 92],
  totalfifty: 45,
  totalOnedayRuns: 6000,
  totalTestRuns: 5000,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`; //anonymous function
  },
  totalRuns: function () {
    return `After 2years later run will be:${
      this.totalOnedayRuns + this.totalTestRuns + 4000
    }`;
  },
};

delete player["isPresent"]; //delete properties in two ways.
delete player.age; //delete properties in two ways.
player.tTwentyruns = 3000;
player["totalWickets"] = 890;
console.log(player);
console.log(player["totalfifty"]); //two ways to access properties
console.log(player.lastName);
console.log(player.fullName()); // call the method
console.log(player.totalRuns()); // call the method
