// --- Remove element ---

const h2Element = document.getElementById("h2"); // child - why dhorbo? jake remove korte chai
const divElement = document.getElementById("div"); // parent - why dhorbo? or theke remove korte chai

// Before
// <div id="div"> - parent
//    <h2 id="h2">Hello World</h2> - child
//    <p id="p">Hello World</p>
//</div>

// <parent-element>.removeChild(<child-element>)
divElement.removeChild(h2Element);

// After removing h2 tag
// <div id="div">
//   <p id="p">Hello World</p>
//</div>

// remove p tag/element
const pElement = document.getElementById("p");
divElement.removeChild(pElement);

// After removing p tag
// <div id="div">
// </div>

document.body.removeChild(divElement);

// Remove div#div2 tag/element
const divElement2 = document.getElementById("div2");
document.body.removeChild(divElement2);

// --- Replace starts ---

// ---- replace
// Present html tag
// <div id="div1">
//  <h2 id="h21">Hello World 1</h2>
//  <p id="p1">Hello World 1</p>
// </div>

// Modification
// <main id="main">
//  <h2 id="h21">Hello World 1</h2>
//  <p id="p1">Hello World 1</p>
// </main>

// The tag I want to replace
const div1 = document.getElementById("div1"); //  child , why dhorbo? ore ami replace korte chai

// The tag I want to replace
const main = document.createElement("main"); // child banailam, why? ore diye ami replace korte chai
main.id = "main"; // why? karon amar structure chai '<main id="main"></main>'

// Create h2 tag
const h2 = document.createElement("h2");
h2.innerHTML = "Hello World 1";
h2.id = "h21";
// <h2 id="h21">Hello World 1</h2>

// Create p tag
const p = document.createElement("p");
p.innerHTML = "Hello World 1";
p.id = "p1";
// <p id="p1">Hello World 1</p>

// Attach h2 tag with main
main.appendChild(h2);

// Attach p tag with main
main.appendChild(p);

document.body.replaceChild(main, div1); // (new, old) -> replace 'div' by 'main'

// --- single element replace ---
// replace h4 with p

// Create p tag
const pEle = document.createElement("p");
pEle.innerHTML = "its p tag";

// Create p tag <p>its p tag</p>

// <h4 id='h4'>From h4 tag</h4>
const h4 = document.getElementById("h4");

document.body.replaceChild(pEle, h4); // (new, old); // replace

// like - already existing tag/element
// const p10 = document.getElementById("10");
// const h4 = document.getElementById("h4");
// document.body.replaceChild(p10, h4);
