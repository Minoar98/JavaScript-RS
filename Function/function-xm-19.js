//celsius to fahrenheit

function convertToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

const result = convertToFahrenheit(77);
console.log(result);

// fahrenheit to celsius

function convertToCelcius(f) {
  return f - (32 * 5) / 9;
}

const result1 = convertToCelcius(100);
console.log(result1);


//
'volve' + 14 + 2 = 'volve' 16 ------------------------------------ 'volvo14' + 2 => 'volvo142'
14 + 2 + 'volvo'  = 16 'volvo' ----------------------------------- 16 + 'volvo' => '16volvo'
2 + '33' = 66 ---------------------------------------------------- '233'
2 - '56' = NaN --------------------------------------------------- -54
2 - 'volvo' = NaN
2 + 'volvo' = '2volvo'
2 - 4 + 'volvo' = NaN -------------------------------------------- -2 + 'volvo' = '-2volvo'
'34' + (3 + 4) + 'volvo' = '3434 volvo' -------------------------- '34' + 7 + 'volvo' => '347' + 'volvo' => '347volvo'
'volvo' + 2 = 'volvo2'
32 / '4' = '324' ------------------------------------------------- 32 / 4 => 8
4 * '4' ='44' ---------------------------------------------------- 4 * 4 => 16
'4' * '4' ='16' -------------------------------------------------- 4 * 4 => 16

14 + 'volvo' + 2 => '14volvo' + 2 => '14volvo2'


 67
+69
----
167

// 'abc'.concat(' ').concat('def') -> 'abc def'
// 'abc' + ' ' + 'def' -> 'abc def'

// const val = 'def';
// `abc ${val}` -> 'abc def'




let val; // undefined, declare
const val2 = 'ABC'; // declare & initialize 

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