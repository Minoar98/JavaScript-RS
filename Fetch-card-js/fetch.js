// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const button = document.getElementById("btn");

const buttonFn = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

button.addEventListener("click", buttonFn);
