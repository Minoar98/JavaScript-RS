// let pending = localStorage.getItem("pending") || [];
// console.log("pending", pending);
// let complete = localStorage.getItem("complete") || [];
// console.log("complete", complete);

//local storage
let pending = JSON.parse(localStorage.getItem("pending")) || [];
let complete = JSON.parse(localStorage.getItem("complete")) || [];

const inputField = document.getElementById("input");
const addTaskBtn = document.getElementById("btn");
const pendingTask = document.getElementById("pending-task");
const completedTask = document.getElementById("completed-task");

let isEditing = false;
let taskToEdit = null;

// Add or Edit Task
const addOrEditTaskFn = () => {
  let taskText = inputField.value.trim();

  if (taskText === "") {
    alert("😮 Task cannot be empty");
    return;
  }

  if (taskText.length > 10) {
    alert("😮 Task cannot be more than 10");
    return;
  }

  if (isEditing) {
    // Update the existing task
    const p = taskToEdit.querySelector("p");
    p.textContent = taskText;
    p.style.fontWeight = "bold";

    // Reset the button and input field
    addTaskBtn.textContent = "Add Task";

    // Clear the input field
    inputField.value = "";
    isEditing = false;
    taskToEdit = null;
  } else {
    // Add a task in the pending list
    // <li>
    //   <input type="checkbox" />
    //   <p>Task 1</p>
    //   <button class="edit">✏️</button>
    // </li>

    // element create
    const li = document.createElement("li");
    const input = document.createElement("input");
    const p = document.createElement("p");
    const button = document.createElement("button");

    // add attribute in the respective element
    input.type = "checkbox";
    // input.setAttribute("type","checkbox")
    p.innerHTML = taskText;
    button.className = "edit";
    button.innerHTML = "✏️";

    li.appendChild(input); // <li><input /></li>
    li.appendChild(p); //
    li.appendChild(button); //

    // console.log(li);
    // console.dir(li);

    // Alternatives
    // Add a task in the pending list
    // const li = document.createElement('li');
    // li.innerHTML = `
    //   <input type="checkbox" />
    //   <p>${taskText}</p>
    //   <button class="edit">✏️</button>
    // `;
    pendingTask.appendChild(li);

    // Clear the input field
    inputField.value = "";
  }
};

// Move task to Completed Tasks
const moveToCompleted = (taskItem) => {
  const p = taskItem.querySelector("p");

  const li = document.createElement("li");
  const button = document.createElement("button");
  button.id = "btn-del";
  button.textContent = "🗑️";

  li.appendChild(p);
  li.appendChild(button);
  completedTask.appendChild(li);

  taskItem.remove();
};

addTaskBtn.addEventListener("click", addOrEditTaskFn);

// Event Delegation for Pending Tasks
pendingTask.addEventListener("change", (event) => {
  console.log("Something changed inside pendingTask");
  if (event.target.type === "checkbox") {
    const li = event.target.parentNode;
    console.log("The parent <li> is:", li);
    moveToCompleted(li);
  }
});

// Event Delegation for Completed Tasks
completedTask.addEventListener("click", (event) => {
  console.log(" You clicked on:", event.target);
  if (event.target.id === "btn-del") {
    console.log("Delete button clicked!");
    const li = event.target.parentNode;
    console.log("Removing this task:", li);
    li.remove(); // Directly remove the task
  }
});

// Event Delegation for Edit Button Click
pendingTask.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit")) {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.classList);
    const button = event.target;
    const li = button.parentNode;
    const p = li.querySelector("p");

    if (p && li) {
      inputField.value = p.textContent;

      // Change the button text to "Edit Task"
      addTaskBtn.textContent = "Edit Task";

      // Set editing state
      isEditing = true;
      taskToEdit = li;
    }
  }
});
