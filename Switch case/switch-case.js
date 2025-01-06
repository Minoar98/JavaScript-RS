// Switch case
// Alternative of if-else statement

// function myAge(age) {
// if (age <= 18) {
//   return "You are child";
// } else {
//   return "You are an adult";
// }

// if (age < 18) {
//   return "You are child";
// } else if (age === 18) {
//   return "You are young";
// } else {
//   return "You are an adult";
// }
// }

// const age = 55;
// const result = myAge(age);
// console.log(result);

// Switch statement
// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// --------------- First Example --------------------
const age = 10;
// if (age === 18) {
//   console.log("Young");
// } else {
//   console.log("Adult or child");
// }

// switch (true) {
//   case age === 18:
//     console.log("You are young");
//     break;
//   default:
//     console.log("You are adult or child");
// }

// --------------- Second Example --------------------
// if (age <= 18) {
//   console.log("Child");
// } else {
//   console.log("Adult");
// }

// switch (true) {
//   case age <= 18:
//     console.log("You are child");
//     break;
//   default:
//     console.log("You are adult");
// }

// --------------- Third Example --------------------
// if (age < 18) {
//   console.log("You are child");
// } else if (age === 18) {
//   console.log("You are young");
// } else {
//   console.log("You are an adult");
// }

// switch (true) {
//   case age < 18: // if
//     console.log("You are child");
//     break;
//   case age === 18: // else if
//     console.log("You are young");
//     break;
//   default: // else
//     console.log("You are Adult");
// }

// --------------- Third Example --------------------
// Print the grade of a student.
// from 0 to 33 - grade should be F
// from 34 to 40 - grade should be E
// from 41 to 50 - grade should be D
// from 51 to 60 - grade should be C
// from 61 to 70 - grade should be B
// from 71 to 80 - grade should be A
// from 81 to 100 - grade should be A+

let marks = 85;
let grade;
switch (true) {
  case marks > 0 && marks <= 33:
    console.log("grade should be F");
    grade = "F";
    break;
  case marks > 33 && marks <= 40:
    console.log("grade should be E");
    grade = "E";
    break;
  case marks > 40 && marks <= 50:
    console.log("grade should be D");
    grade = "D";
    break;
  case marks > 50 && marks <= 60:
    console.log("grade should be C");
    grade = "C";
    break;
  case marks > 60 && marks <= 70:
    console.log("grade should be B");
    grade = "B";
    break;
  case marks > 70 && marks <= 80:
    console.log("grade should be A");
    grade = "A";
    break;
  default:
    console.log("grade should be A+");
    grade = "A+";
    break;
}

console.log(`Your grade is: ${grade}`);

// --------------- Fourth Example --------------------
// Print the grade of a student.
// from 0 to 33 - grade should be F
// from 34 to 40 - grade should be C
// from 41 to 50 - grade should be C
// from 51 to 60 - grade should be B
// from 61 to 70 - grade should be B
// from 71 to 80 - grade should be A
// from 81 to 100 - grade should be A+

marks = 92;
switch (true) {
  case marks > 0 && marks <= 33:
    console.log("grade should be F");
    break;
  case marks > 33 && marks <= 40:
  case marks > 40 && marks <= 50:
    console.log("grade should be C");
    break;
  case marks > 50 && marks <= 60:
  case marks > 60 && marks <= 70:
    console.log("grade should be B");
    break;
  case marks > 70 && marks <= 80:
    console.log("grade should be A");
    break;
  default:
    console.log("grade should be A+");
}

// --------------- Fiveth Example --------------------
const letter = "G";
switch (true) {
  case letter === "A":
  case letter === "a":
    console.log("Letter is A");
    break;
  case letter === "B":
  case letter === "b":
    console.log("Letter is B");
    break;
  case letter === "C":
  case letter === "c":
    console.log("Letter is C");
    break;
  default:
    console.log("Letter is not A, B, or C ", letter);
}
