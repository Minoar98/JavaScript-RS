// function changeText(id) {
//   id.innerHTML = "Ooops!";
// }

// // function displayDate() {
// //   document.getElementById("demo").innerHTML = Date();
// // }
// const displayDate = () => {
//   document.getElementById("demo").innerHTML = Date();
// };

// // document.getElementById("myBtn").onclick = displayDate;

// const mDown = (obj) => {
//   obj.style.backgroundColor = "#1ec5e5";
//   obj.innerHTML = "Release Me";
// };

// const mUP = (obj) => {
//   obj.style.backgroundColor = "#D94A38";
//   obj.innerHTML = "Thank You";
// };

// document.getElementById("id02").innerHTML =
//   document.getElementById("id01").firstChild.nodeValue;

const div = document.querySelector("#div");
const h11 = document.createElement("h1");
h11.innerHTML = "ApendChild add new";
div.appendChild(h11);

// remove//
// const h4Element = document.getElementById("h4");
// const h4Element = document.getElementsByClassName("rm")[0];
const h4Element = document.querySelector(".rm");
console.log(h4Element);
// const h4Elements = document.getElementsByClassName("rm");

const divElement = document.querySelector("#div2");
// divElement.removeChild(h4Element);
// document.body.removeChild(divElement);
// document.body.remove(divElement);

const div3 = document.getElementById("div3");
document.body.removeChild(div3);

const main = document.createElement("main");
main.id = "main";

// create p element

const pElement = document.createElement("p");
pElement.innerHTML = "Hello React";
pElement.id = "p1";

const h3Element = document.createElement("h3");
h3Element.innerHTML = "Hello React";
h3Element.id = "h3";

main.appendChild(pElement);
main.appendChild(h3Element);
document.body.replaceChild(main, div);

// element

const pEle = document.createElement("p");
pEle.innerHTML = "Jiboner 1st programming language JavaScript";

const h4Elements = document.getElementsByClassName("rm")[0];
divElement.replaceChild(pEle, h4Elements);

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
  alert("Hello World!");
};

// add

// event listener
btn.addEventListener("click", btnFn);
btn1.addEventListener("click", btnFn1);
btn2.removeEventListener("click", btnFn2);

///
const pChild = document.getElementById("pChild");
console.log(pChild.parentNode); // parent ke access korlam
console.log(pChild.firstChild.nodeValue);

const secondChild = document.getElementById("secondChild");
console.log(secondChild.firstElementChild);
console.log(secondChild.firstElementChild.nextElementSibling); // next sibling dorci

console.log(secondChild.lastElementChild);
console.log(secondChild.firstElementChild.nextElementSibling); // next sibling dorci

const imageElement = document.createElement("img");
imageElement.setAttribute("src", "img/doua.JPG");
document.body.appendChild(imageElement);

///

const pElements = document.getElementById("para");
pElements.remove();
