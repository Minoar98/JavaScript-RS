const pChild = document.getElementById("pchild");
// <p> tag-er moddher text value access kortesi
console.log(pChild.firstChild.nodeValue);

// <p id="pchild"> er parent access kortesi — seta holo <div id="child">
console.log(pChild.parentNode);

const secondChild = document.getElementById("secondChild");

// firstElementChild — first element tag access kortesi
console.log(secondChild.firstElementChild);

// lastElementChild — last element tag access kortesi
console.log(secondChild.lastElementChild);

// first element-er next sibling access kortesi
console.log(secondChild.firstElementChild.nextElementSibling);

// last element-er previous sibling access kortesi
console.log(secondChild.lastElementChild.previousElementSibling);

// eventlistener

const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

// function

const btnFn = () => {
  console.log("Submit");
};

const btnFn1 = () => {
  alert("Hello World!");
};
const btnFn2 = () => {
  alert("Hello React!");
};

// add

// event listener
btn.addEventListener("click", btnFn);
btn1.addEventListener("click", btnFn1);
btn2.addEventListener("click", btnFn2);
btn2.removeEventListener("click", btnFn2);

// remove

const pEle = document.getElementById("p1");
pEle.remove();

// get attribuite

const h1Ele = document.getElementById("h1");
const text = h1Ele.getAttribute("class"); // class paici
console.log(text);

// set attribuite

const h11Ele = document.getElementById("h12");
// attribuite ekta new element add kore
// Set the class attribute to a new value
h11Ele.setAttribute("class", "updated");
// h11Ele.removeAttribute("class");

//  add a style
h11Ele.setAttribute("style", "color: red; font-size: 30px;");

const aEle = document.getElementById("a");
aEle.innerHTML = "google";
aEle.setAttribute("href", "https://www.google.com/");
