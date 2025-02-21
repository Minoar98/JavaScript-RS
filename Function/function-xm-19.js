//celsius to fahrenheit

function convertToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

const result = convertToFahrenheit(77);
console.log(result);

// fahrenheit to celsius

function convertToCelcius(f) {
  return ((f - 32) * 5) / 9;
}

const result1 = convertToCelcius(100);
console.log(result1);

//

// 'abc'.concat(' ').concat('def') -> 'abc def'
// 'abc' + ' ' + 'def' -> 'abc def'

// const val = 'def';
// `abc ${val}` -> 'abc def'

let val; // undefined, declare
const val2 = "ABC"; // declare & initialize

// let vs var vs const

// var - define, update, re-define
// let - define, update
// const - define

// var v = 3; // define/declare
// v = 5; // update
// var v = 30; // re-define

// 1. object
// 2. for, while, for-in, for-of loop
// 3. template literal `abc ${val}`
// 4. function + arrow

// 1.
// 2.
