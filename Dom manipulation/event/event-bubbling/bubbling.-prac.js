const mybutton = document.getElementById("btn");
const myDiv = document.getElementById("div");

// function
const func = () => {
  console.log("WOW");
};
const func1 = () => {
  console.log("Thats great");
};
const func2 = () => {
  console.log("ooops");
};



mybutton.addEventListener("click", func1, true);
myDiv.addEventListener("click", func);
// myDiv.removeEventListener("click", func);
