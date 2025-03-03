// slice
const fruits = "Bannaa, Kiwi, orange, Apple, Mango";
const result = fruits.slice(-12);
const result1 = fruits.slice(7, 12);
console.log(result);
console.log(result1);

const fruites = "Apple, Bannana, Kiwi";
const result2 = fruites.slice(-12);
console.log(result2);

// chardode

const text = "Hello World";
const char = text.charCodeAt(0);
console.log(char);
// specific position
const name = "W3Schools";
const letter = name[2];
console.log(letter);

// property access

const letters = "Hello World";
const charc = text[0];
console.log(charc);

// SUBSTRING

let text1 = "JavaScript";
console.log(text1.substring(5, 2)); // "vaS" (JavaScript swaps indices)

const text11 = "Hello";
const text2 = "World";
const text3 = text11.concat(" ", text2);
console.log(text3);

// trim

const text123 = "       hello World    ";
// const text221 =text123.trim();
const text221 = text123.trimEnd();
console.log(text221);
