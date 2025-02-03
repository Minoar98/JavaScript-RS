// Promise with vanilla function
// 1. const promise = new Promise(function () {})
// 2. const promise = new Promise(function (resolve, reject) {})

// Promise with arrow function
// 1. const promise = new Promise(() => {})
// 2. const promise = new Promise((resolve, reject) => {})

// Syntax
new Promise((resolve, reject) => {
  if (x) {
    resolve();
  } else {
    reject(new Error('This is an Error'));
  }
})