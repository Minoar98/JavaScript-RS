const mybutton = document.getElementById("btn");
const myDiv = document.getElementById("div");
const myDiv1 = document.getElementById("div-1");

// function
const func = () => {
  console.log("IT'S A DIV");
};
const func1 = () => {
  console.log("IT'S A BTN");
};
const func2 = () => {
  console.log("IT'S A Div-1");
};
// mybutton.addEventListener("click", func1);
myDiv1.addEventListener("click", func2, true);

mybutton.addEventListener("click", func1, true);
myDiv.addEventListener("click", func);
myDiv.removeEventListener("click", func);
