function changeText(id) {
  id.innerHTML = "Ooops!";
}

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }
const displayDate = () => {
  document.getElementById("demo").innerHTML = Date();
};

// document.getElementById("myBtn").onclick = displayDate;

const mDown = (obj) => {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
};

const mUP = (obj) => {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "Thank You";
};

document.getElementById("id02").innerHTML =
  document.getElementById("id01").firstChild.nodeValue;
