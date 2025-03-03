//update h2
const h2Element = document.getElementsByTagName("h2")[0]; // Get the first <h2> element

h2Element.innerHTML = "SYED MINOAR HASAN"; // Update text
h2Element.style.fontSize = "20px"; // Change font size
h2Element.style.color = "#DE3163"; // Change color

console.log(h2Element.innerHTML); // Log the updated title

// const myButtonElement = document.getElementsByTagName("button")[0];
// css selector
// id - #id1 {}
// class - .class1 {}
// tag - p {}
// const myButtonElement = document.querySelector('button') // <button>Learn More</button>

// console.log(myButtonElement);

// myButtonElement.innerHTML = "Know more"; // <button>Know more</button>
// myButtonElement.className = "btn"; // <button class='btn'>Know more</button>

const pElement = document.getElementsByTagName("p")[0];
pElement.innerHTML =
  "“Never let your memories be greater than your dreams.” Dougland ivester.";
pElement.style.color = "#666";
pElement.style.fontWeight = "bold";
// console.log(pElement.innerHTML);

// imageElement.src = "IMG_5714.JPG"; // Change to the new image URL

// Last modification
// 1. Already attached a css in html
// 2. New css already written in css file named 'btn1'
// TODO: ager ta replace kore new ta apply korben

const myButtonElement1 = document.querySelector(".btn"); // <button class='btn'></button>
console.log(myButtonElement1);
// myButtonElement1.className = "btn1"; // <button class='btn1'></button>
myButtonElement1.className = "btn1"; // <button class='btn1 NewFont'></button>
myButtonElement1.className += " NewFont"; // <button class='btn1 NewFont'></button>

// const myFontElement = document.className("NewFont");
// console.log(myButtonElement1.innerHTML);

// 2 mar
// image update
const imageElement = document.getElementsByTagName("img")[0]; // <img src='abc.jpg' alt='' />
imageElement.setAttribute("src", "IMG_5714.JPG");
// 1st - which attribute
// 2nd - value of that attribute

imageElement.setAttribute("id", "id1");
imageElement.setAttribute("class", "class1");
console.log(imageElement);
