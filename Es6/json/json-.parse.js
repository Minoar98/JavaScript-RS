// const obj = JSON.parse('{"name" :"John", "age" : 30, "city": "New York"}');
// console.log(obj);

// const text = '["Ford","BMW", "AUdI", "Fiat"]';
// const myArr = JSON.parse(text);
// console.log(myArr[0]);

// convert string into A Date

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
// console.log(obj1.name + ", " + obj1.birth);

console.log(`${obj.name}, ${obj.birth}`);

//Convert a string into a date, using the reviver function:

const text1 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj1 = JSON.parse(text, function (key, value) {
  if (key === "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

console.log(`${obj1.name}, ${obj1.birth}`);
