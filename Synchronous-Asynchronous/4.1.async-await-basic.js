const flag = 1;

// Syntax
// Either 'resolve' or 'reject'
const firstPromise = new Promise((resolve, reject) => {
  if (flag) {
    resolve('This is a resolve message');
  } else {
    reject(new Error('This is an Error'));
    // reject("This is an Error");
  }
});

// vanila async function (syntax)
// async function fn() {}

// arrow async function (syntax)
// const fn2 = async () => {}

const solve = async () => {
  try {
    // Only catch 'resolve' part
    const res = await firstPromise;
    console.log(res);
  } catch (err) {
    // Only catch 'catch' part
    console.log(err.message);
    // console.log(err);
  }
}

solve();

// Rules:
// 1. Using 'await' keyword, I can resolve or reject the promise
// 2. Only use 'await' keyword, inside the 'async' function
// 3. Before using 'await' or resolve promise, I need to wrap that using try-catch block
// 4. Finally, must call the 'async' function for execution

// H/W
// Try yourself
// 1. Only resolve
// 2. Only reject
// 3. Promise.all()
// 4. Promise.race()