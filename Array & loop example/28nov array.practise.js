// using filter
const myFunction =(value, index, array) => {
    return value > 18    
};
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
console.log(over18);

// using map

const number1 = [45, 4, 9, 16, 25];
const numbers2 = number1.map(myFunction1)

function myFunction1(value, index, array){
    return value * 2
}

console.log(numbers2)

// reduce



function myFunction2(total, value, index, array) {
    return total + value;
}

const numbers1 = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction2)
console.log(sum);


