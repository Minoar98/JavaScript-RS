// Promise with vanilla function
// 1. const promise = new Promise(function () {})
// 2. const promise = new Promise(function (resolve, reject) {})

// Promise with arrow function
// 1. const promise = new Promise(() => {})
// 2. const promise = new Promise((resolve, reject) => {})

const flag = true;

// Syntax
// Either 'resolve' or 'reject'
const firstPromise = new Promise((resolve, reject) => {
  if (flag) {
    resolve("This is a resolve message");
  } else {
    reject(new Error("This is an Error"));
    // reject("This is an Error");
  }
});

// console.log(firstPromise);

firstPromise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error.message);
    // console.log(error);
  });

// Only 'resolve'
const secondPromise = Promise.resolve("This is the 2nd resolve message");
secondPromise.then((res) => {
  console.log(res);
});

// Only 'reject'
const thridPromise = Promise.reject(new Error("This is an 2nd Error"));
thridPromise.catch((error) => {
  console.log(error.message);
  // console.log(error);
});

// Promise.all()
const Promise1 = Promise.resolve("This is Promise1");
// const Promise2 = Promise.resolve('This is Promise2');
const Promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This is Promise2");
  }, 5000);
});
Promise.all([Promise1, Promise2, firstPromise])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    // console.log(error.message);
    console.log(error);
  });

// Promise.race()
Promise.race([firstPromise, Promise1, Promise2])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    // console.log(error.message);
    console.log(error);
  });

