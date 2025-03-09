// create tag
const newElement = document.createElement("h4");
newElement.innerHTML = "Frontend"; // tag e content deci
console.log(newElement);
console.dir(newElement);
document.body.appendChild(newElement);
// set attribuite
const imageElement = document.getElementsByTagName("img")[0];
imageElement.setAttribute("src", "IMG_1645.jpg");
console.log(imageElement);

// create or a tag

const newElement1 = document.createElement("p");
newElement.innerHTML = "JavaScript";
console.log(newElement1);
document.body.appendChild(newElement1);

const div = document.querySelector(".card");
div.appendChild(newElement);
div.appendChild(newElement1);

// add csss
const cardElement = document.createElement("button-1");
console.log(cardElement);
cardElement.className = "btn1 newfont";
document.body.appendChild(cardElement);
div.appendChild(cardElement);

// remove element
// const h2Element = document.getElementById("h21"); /// child - why dorbo - romve korar jnno
// const divElement = document.getElementById("card-1"); //// parent - why dhorbo? or theke remove korte chai

// divElement.removeChild(h2Element);

const h2Element = document.getElementById("h21"); //child - why dorbo - remove korar jnno

const divElement = document.querySelector(".card"); // parent - why dorbo - or theke remove korar jnno
divElement.removeChild(h2Element);
// remove p tag
const pElement = document.getElementById("p11");
divElement.removeChild(pElement);

// Remove div#div2 tag/element
const divElement2 = document.getElementById("div2"); // Select div#div2
document.body.removeChild(divElement2);

// replace

// The tag I want to replace
const div1 = document.getElementById("div1"); //  child , why dhorbo? ami ore replace korte chai

// The tag I want to replace

const main = document.createElement("main"); //child banailam, why? ore diye ami replace korte chai
main.id = "main";
// create h2 tag
const h2 = document.createElement("h2");
h2.innerHTML = "Minoar Hasan";
h2.id = "h22";

// create p tag
const p = document.createElement("p");
p.innerHTML = "Backend Developer";
p.id = "p12";

// create img tag

// const imageElement1 = document.createElement("img");
// imageElement1.setAttribute("src", "IMG_5952.jpg");
// attach h2

main.appendChild(h2);

//attach p
main.appendChild(p);
// attach img

// main.appendChild(imageElement1);

document.body.replaceChild(main, div1); // new , old
