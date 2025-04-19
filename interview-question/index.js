const val = 1;
console.log(val || "first value is falsy value");
console.log(val ?? "first value is falsy value");

const val1 = null;
console.log(val1 || "first value is falsy value");
console.log(val1 ?? "first value is falsy value");

console.log("=============================");

const val2 = 0;
let retunedVal2 = val2 || "first value is falsy value";
console.log(retunedVal2);
retunedVal2 = val2 ?? "first value is falsy value";
console.log(retunedVal2);

const val3 = null;
let retunedVal3 = val3 || "first value is falsy value";
console.log(retunedVal3);
retunedVal2 = val3 ?? "first value is falsy value";
console.log(retunedVal3);

// '||' cares about all 6 falsy value
// '??' cares about only 'null' & 'undefined'
// Functionality:
// 1. Looks at the first part
// 2. If find out the care-able variable, then assigns/returns the second part
