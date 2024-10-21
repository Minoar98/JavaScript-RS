// a function has no parameter
// arrow function
const myFunc = () => {
    console.log("My Bangladesh")
}
myFunc();

// A function has a parameter
const myFunc1 =(val1, val2) => {
    console.log(val1 + val2);
}
myFunc1(10, 20);

const myFunc3 = (val1, x = 10) =>{
    console.log(val1 + x)
}
myFunc3(4);
myFunc3(4, 15)

//A function return something
const myFunc4 = (val1) => {
    return val1;
}
console.log(myFunc4(10));

// function 1 body line r
const myFunc5 = () => console.log("My country");

const myFunc6 = (val1, val2) => console.log(val1 + val2);
const myFunc7 =(val1, x = 10) => console.log(val1 + x);
const myFunc8 =(val1) => val1

