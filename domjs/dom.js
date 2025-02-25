// DOM methods
// 1. normal method

// <p id='id1' class='general-class'>Hello world</p>
// <p class='general-class'>Hello world 2</p>
// tag -> p
// attribute 2 ta, id & class

// A. const pId = document.getElementById('id1'); // return element
// B. const pClass = document.getElementsByClassName('general-class'); // return HTMLCollections, [#p, #p]
// C. const p = document.getElementsByTagName('p'); // return HTMLCollections, [p#id1, #p]

// 2. using css selector

// return Node
// A. document.querySelector('p') -> tag
// B. document.querySelector('#id1') -> id
// C. document.querySelector('.general-class') -> class

// return NodeList (Array Like)
// A. document.querySelectorAll('p') -> tag, returns NodeList -> [p, p]
// B. document.querySelectorAll('.general-class') -> class