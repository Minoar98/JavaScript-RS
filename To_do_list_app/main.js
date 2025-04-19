// tag
const newTask = document.getElementById("input");
const addTask = document.getElementById("btn");
const pendingTask = document.getElementById("pending-task");
const deleteTask = document.getElementById("btn-del");
const cTask = document.getElementById("ctask");
const checkBox = document.getElementById("checkbox");

//add task
const addTaskFn = () => {
  let value = newTask.value;

  if (value === "") {
    alert("😮 Task cannot be empty");
    return;
  }

  if (value.length > 10) {
    alert("😮 Task cannot be more tha 10");
    return;
  }
  console.log(value);

  // Add a task in the pending list

  //  // element create
  const li = document.createElement("li");
  const input = document.createElement("input");
  const p = document.createElement("p");
  const button = document.createElement("button");

  // add attribute in the respective element

  input.type = "checkbox";
  p.innerHTML = value;
  button.className = "edit";
  button.innerHTML = "✏️";

  li.appendChild(input);
  li.appendChild(p);
  li.appendChild(button);

  console.log(li);
  console.dir(li);

  pendingTask.appendChild(li);

  newTask.value = "";
};

// remove

const deleteTaskFn = () => {
  cTask.remove();
};

////pending task

const checkBoxFn = () => {
  console.log(checkBox.nextElementSibling.innerHTML);
  checkBox.parentNode.remove();
};

addTask.addEventListener("click", addTaskFn);
deleteTask.addEventListener("click", deleteTaskFn);
checkBox.addEventListener("change", checkBoxFn);
