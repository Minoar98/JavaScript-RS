// 1.  create an object - done
// 2. property and method - done
// 3. two ways to access properties - x
// 4. call the method - done
// 5. delete properties in two ways.
// 6. add properties after creating object
// write an arrow function which returns "Hello JavaScript" (by default) or return as my command

// Create an object
const person = {
  firstName: "Lionel", // property
  lastName: " Messi",
  isPresent: true,
  age: 38,
  totalGoals: 900,
  fullName: function () {
    // method/anonymous function
    return `${this.firstName} ${this.lastName}`;
  },
};

// 3. two ways to access properties - x
console.log(person.firstName);
console.log(person["lastName"]);

// 6. Add properties after creating object
person["total-Ballon-d'Or"] = 8;
person.isMale = true;

delete person.age;
delete person["isPresent"];

console.log(person);
console.log(person.fullName()); // 4. call the method

//arrow function
const myfunction = (nam = "JavaScript") => {
  //   console.log(nam);
  return `Hello ${nam}`;
};

console.log(myfunction());
console.log(myfunction("React Js"));

const n = 50;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i ** 2;
}
console.log(sum);

// 0 + 1^2 + 2^2 + ..... + n^2 = sum

// H/W
// do it using while loop0

const n1 = 50;
let sum1 = 0;

j = 1;
while (j <= n) {
  sum1 += j ** 2;
  j++;
}
console.log(sum1);
