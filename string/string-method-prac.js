//JavaScript String split()

const text = "a, b, c, d, e, f";
const myArr = text.split("|");
console.log(myArr);

//02
const sentence = "I am learning Javascript";
const words = sentence.split(" "); // split by spaces
console.log(words);

const data = "apple, banana, cherry";
const fruits = data.split(",");
console.log(fruits);

const sentence1 = "JavaScript is awesome";
const parts = sentence1.split(" ", 1);
console.log(parts);

const word = "hello";
const letters = word.split("");
console.log(letters);

const text1 = "Please visit Microsoft!";
const newText = text1.replace("Microsoft", "w3schools");
console.log(newText);

const text2 = "Please visit Microsoft!";
const newText2 = text2.replace(/MICROSOFT/i, "W3Schools");
console.log(newText2);

const text3 = "Please visit microsoft and Microsoft!";
const newText3 = text3.replace(/Microsoft/gi, "W3Schools");
console.log("caseintensive:", newText3);

const text4 = "I love cats. Cats are very easy to love. Cats are very popular.";

const allText = text4.replaceAll("Cats", "Dogs");
const allText1 = text4.replaceAll("cats", "dogs");
console.log(allText);
console.log(allText1);

// endswith

const text5 = "John Doe";
const result = text5.endsWith("Doe");
console.log(result);

const texts = "Hello world, welcome to the universe.";
const allText2 = texts.endsWith("world", 11);
console.log(allText2);

const texts1 = "Hello world, welcome to the universe.";
const result2 = texts1.startsWith("world", 6);
console.log(result2);

const texts3 = "Hello world, welcome to the universe.";
const result3 = texts3.startsWith("Hello");
console.log(result3);

const sentences = "Hello world, welcome to the universe.";
const words1 = sentences.startsWith("world");
console.log(words1);

//includes

const texts4 = "Hello world, welcome to the universe.";
const result4 = texts4.includes("world");
console.log(result4);
//matchall
const texts5 =
  "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator = texts5.matchAll(/Cats/gi);
console.log("matchAll ", Array.from(iterator), texts5);
//  search

const texts6 = "Please locate where 'locate' occurs!";
const allText3 = texts6.search("locate");
console.log(allText3);

const elements = "JavaScript";
console.log(elements.substring(5, 2)); // "vaS" (JavaScript swaps indices)
