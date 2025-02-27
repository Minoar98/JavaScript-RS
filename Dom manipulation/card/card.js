//update h2
const h2Element = document.getElementsByTagName("h2")[0]; // Get the first <h2> element

h2Element.innerHTML = "SYED MINOAR HASAN"; // Update text
h2Element.style.fontSize = "20px"; // Change font size
h2Element.style.color = "#DE3163"; // Change color

console.log(h2Element.innerHTML); // Log the updated title

const myButtonElement = document.getElementsByTagName("button")[0];
myButtonElement.innerHTML = "Know more";

console.log(myButtonElement.innerHTML);

const pElement = document.getElementsByTagName("p")[0];
pElement.innerHTML =
  "“Never let your memories be greater than your dreams.” Dougland ivester.";
pElement.style.color = "#666";
pElement.style.fontWeight = "bold";
console.log(pElement.innerHTML);

// image update
const imageElement = document.getElementsByTagName("img")[0];
imageElement.src = "IMG_5714.JPG"; // Change to the new image URL
