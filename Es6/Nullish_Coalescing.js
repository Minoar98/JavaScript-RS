// NaN (Not a Number),false,0,'', null,undefined
// Example of 'NaN'
// '100' / '2A'
console.log('100' / '2A')

// Short Conditional
// '&&' -> If first part is 'true' then execute
// '||' -> If first part is 'false' then execute

console.log(1 && 'One')
console.log(0 && 'Zero')

console.log(1 || 'One')
console.log(0 || 'Zero')

// '??' operator
// null, undefined
const val = 'null';
const val2 = null;
let val3;

console.log(typeof val)
console.log(typeof val2)
console.log(typeof val3)

let lang;
console.log(lang ?? 'JS')
console.log(lang || 'JS')

const lang2 = null;
console.log(lang ?? 'JS-null')
console.log(lang || 'JS-null')

const lang3 = 0;
console.log(lang3 ?? 'JS-0')
console.log(lang3 || 'JS-0')