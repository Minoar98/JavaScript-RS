// remove function
const obj = {
  name: "John",
  age: function () {
    return 30;
  },
  city: "New York",
};

const myJSON = JSON.stringify(obj);
console.log(myJSON);

const obj1 = { name: "John", age: 30, city: "New York" };

const myJSON1 = JSON.stringify(obj1);
console.log(myJSON1);

const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON2 = JSON.stringify(arr);
console.log(myJSON2);

// boolean

const bool = new Boolean(1);
const myJSON3 = JSON.stringify(bool);
console.log(myJSON3);

// number

const num = 123e-5;
const myJSON4 = JSON.stringify(num);
console.log(myJSON4);
// date

const obj2 = { name: "John", today: new Date(), city: "New York" };
const myJSON5 = JSON.stringify(obj2);
console.log(myJSON5);
