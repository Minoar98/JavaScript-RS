// 1. 7, 2.15 3. 20
// under 10 , 18-, 18+
function detectingAgeLimit(age){
    if(age < 10){
        console.log("under 10")
    } else if(age < 18){
        console.log("18-")
    } else{
        console.log("18+")
    }
}

detectingAgeLimit(7);
detectingAgeLimit(15);
detectingAgeLimit(20);

//Normal if-else
// if (condition) {
//   console.log();
// } else {
//   console.log();
// }

// Ternary Operators (ES6)
// condition ? console.log() : console.log();

// Only applicable for one liner if-else & only for if & else statement

const num = 21;
if (num % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
}

// Way-01
num % 2 === 0 ? console.log('Even') : console.log('Odd');

// Way-02
console.log(num % 2 === 0 ? 'even' : 'odd'); // Returning string

// example:
const isEven = num % 2 ? false : true; // Returning boolean value
console.log(isEven);

// Alternative
let isEven2;
if (num % 2) {
  isEven2 = false;
} else {
  isEven2 = true;
}











