const pChild = document.getElementById("pChild");
console.log(pChild.firstChild.nodeValue);
console.log(pChild.parentNode);
// parent ta ke aceess korlam

const secondChild = document.getElementById("secondChild");
console.log(secondChild.firstElementChild);
console.log(secondChild.firstChild.nodeValue);
// 1St child dorci
console.log(secondChild.lastElementChild); // last child dorci
console.log(secondChild.firstElementChild.nextElementSibling); // next sibling dorci
console.log(secondChild.lastElementChild.previousElementSibling); // previous sibling dorci
