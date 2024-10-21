//A function called "division" takes a parameter and returns the division by 5. (use default parameter).

function division(num = 25){
    return num / 5
}
console.log(division(30));
console.log(division());

//defaul parameter added

//arrow function

const division1 = (num = 25) => {
    return num / 5
}
console.log(division1(180));
console.log(division1())