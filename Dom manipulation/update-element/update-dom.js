//step:1
const h11 = document.getElementById("update");

// const obj = {
//   val: 5,
//   mth: () => {
//     return this.val;
//   },
// };

// // write
// console.log(obj.val); // 5
// obj.val = 6;
// console.log(obj.val); // 6

// console.log(obj.mth()); // method

h11.innerHTML = "Keep eyes on the ball"; // content/text update
// console.log(h11.className);
// console.log(h11.id);

// method
// call korbo
// innerHTML()

console.log(h11.innerHTML); // READ

console.log(h11); // READ
console.dir(h11);

h11.className = "init";
h11.id = "repo";
console.log(h11.className);
console.log(h11.id);

console.log("After changing===============================================");
console.log(h11); // READ
console.dir(h11);

h11.style.fontSize = "10px";
h11.style.color = "#dddd";

// My modification
const p = document.getElementById('id1') // <p id='id1'>Hello world</p>
p.className = "dite" // <p id='id1' class='dite'>Hello world</p>


// <button>Button</button>
// <button class='btn'>Button</button>


// 1. string, array, methods
// 2. Banking - single user
// 3. Banking - multiple users
// 4. asynchronous coding - understanding exam
// a. callback
// b. promise
// c. async-await
// 5. all es6