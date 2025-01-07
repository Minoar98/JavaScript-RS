// padding

const number = 5;
const text = number.toString();
const padded = text.padStart(4, "0");
console.log(padded);

const numbers = 5;
const text1 = numbers.toString();
const padded1 = text1.padEnd(5, "0");
console.log(padded1);

const texts = "6";
const padd = texts.padStart(7, "0");
console.log(padd);

//trim

const subject = "      Hello  world    ";
const result = subject.trimStart();
console.log(result.length);

// concat

const word = "Hello";
const word1 = "World!";
const word3 = word.concat(" ", word1);
console.log(word3);

///
const firstName = "Peter";
const lastName = "parker";
const fullName = firstName.concat(" ", lastName);
console.log(fullName);

// substr

const str = "Apple, Banana, Kiwi";
const part = str.substring(7, 13);
console.log(part);

const stri = "Apple, Banana, Kiwi";
const part1 = stri.substr(7, 6);
console.log(part1);

const str2 = "Apple, Banana, Kiwi";
const part3 = str2.substr(-4);
console.log(part3);

const str3 = "Apple, Banana, Kiwi";
const part4 = str3.substr(7);
console.log(part4);
