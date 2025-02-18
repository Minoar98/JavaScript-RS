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
