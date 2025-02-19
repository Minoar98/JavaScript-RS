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

// 7. A function called "isEven" takes in a number as a parameter and returns true if the number is even, and false if the number is odd.

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const result2 = isEven(25);
console.log(result2);


// 6. A function called "division" takes a parameter and returns the division by 5. (use default parameter).
