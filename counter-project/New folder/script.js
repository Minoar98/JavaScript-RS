// let count = 0;
// const increaseBtn = document.getElementById("increase");
// const decreaseBtn = document.getElementById("decrease");
// const counterNumber = document.getElementById("count");

// const increaseBtnFn = () => {
//   count++;
//   counterNumber.textContent = count;
// };

// const decreaseBtnFn = () => {
//   count--;
//   counterNumber.textContent = count;
// };

// increaseBtn.addEventListener("click", increaseBtnFn);
// decreaseBtn.addEventListener("click", decreaseBtnFn);

let count = Number(localStorage.getItem("count")) || 0; // type casting

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const counterNumber = document.getElementById("count");

// Set the initial count from localStorage
counterNumber.textContent = count;

const updateUIAndStorage = () => {
  counterNumber.textContent = count;
  localStorage.setItem("count", count);
};

const increaseBtnFn = () => {
  count++;
  updateUIAndStorage();
};

const decreaseBtnFn = () => {
  count--;
  updateUIAndStorage();
};

increaseBtn.addEventListener("click", increaseBtnFn);
decreaseBtn.addEventListener("click", decreaseBtnFn);
