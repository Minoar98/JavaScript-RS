// Convert Fahrenheit to Celsius:

function convertFahrenheitToCelcius(f) {
  return ((f - 32) * 5) / 9;
}

const result = convertFahrenheitToCelcius(77);
console.log(result);

// Convert celcius to Fahrenheit:

const convertToFahrenheit = (c) => (c * 9) / 5 + 32;

const result1 = convertToFahrenheit(32);
console.log(result1);

//  A function called "isEven" takes in a number as a parameter and returns true if the number is even, and false if the number is odd.

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const result2 = isEven(25);
console.log(result2);

//  A function called "division" takes a parameter and returns the division by 5. (use default parameter).

function division(num = 20) {
  return num / 5;
}

const value = division(45);
console.log(value);

//  A function called "division" takes in two parameters and returns the division of the two numbers.

function division1(num1, num2) {
  return num1 / num2;
}

const value1 = division1(50, 25);
console.log(value1);

//  A function called "multiply" takes in two parameters and returns the product of the two numbers.

function multiPly(num1, num2) {
  return num1 * num2;
}
const val = multiPly(25, 25);
console.log("The result is" + " " + val);
console.log(`The result is ${val}`);

// 2. A function called "minOfTwo" takes two numbers as parameters and returns the smallest of the two.

const minOfTwo = (num1, num2) => {
  return num1 < num2 ? num1 : num2;
};

const result3 = minOfTwo(10, 20); // Returns 10, since 10 is smaller
console.log(result3); // Output: 10

const result4 = minOfTwo(30, 15); // Returns 15, since 15 is smaller
console.log(result4); // Output: 15

//////A function takes a number & is divisible by 10

const dividedBy10 = (num, x = 10) => {
  return num % x === 0 ? true : false;
};

const val1 = dividedBy10(100);
const val2 = dividedBy10(186);
console.log(val1);
console.log(val2);
