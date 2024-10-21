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

const myFunc3 = (val3, x = 10) =>{
    console.log(val3 + x)
}
myFunc3(4);
myFunc3(4, 15)

//A function return something
const myFunc4 = (val1) =>{
    return val1;
}
console.log(myFunc4(10));