const btn = document.getElementById("btn");

const btn1 = document.getElementById("btn1");

// funtion
const fn = () => {
  console.log("Do it now");
  // add the 'btn' class into btn element
  btn.className = "btn";
};

// event listener
btn.addEventListener("click", fn);

const fn1 = () => {
  console.log("Submit here");
};

// event mouseOver
btn1.addEventListener("mouseover", fn1);

const fn2 = () => {
  console.log("Submit here");
  btn.className = ""; // <button class=''></button>
};

// event click
btn1.addEventListener("click", fn2);

// form er jonno
// onchange - change
// oninput - input

// Way-1: Direct vanila annonymous funciton
// btn.addEventListener("click", function () {
//   console.log("Do it now");
// });

// Way-2: Direct use arrow function
// btn.addEventListener("click", () => {
//   console.log("Do it now");
// });

// Way-3: Use a function from outside the event listener
// btn.addEventListener("click", fn);

// Way-4: Use a function from outside the event listener but need to pass any parameter
// btn.addEventListener("click", function () => {
//  fn(param1, param2);
// });


// step-1
// jar upor event apply korbo take age dhore nibo

// step-2
// jake dhorlam take 'addEventListener' dibo

// step-3
// function tar description likbo
// kothay? jekhane 'addEventListener' add korsi tar upore

// like:

// const fn1 = () => {
//   console.log("Submit here");
// };

// // event listener
// btn.addEventListener("click", fn);

// Review: https://www.w3schools.com/js/js_htmldom_events.asp