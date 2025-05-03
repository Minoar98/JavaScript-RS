// Get tasks from localStorage
let pending = JSON.parse(localStorage.getItem("pending")) || [];
let complete = JSON.parse(localStorage.getItem("complete")) || [];

// Select elements
const inputField = document.getElementById("input");
const addTaskBtn = document.getElementById("btn");
const pendingTask = document.getElementById("pending-task");
const completedTask = document.getElementById("completed-task");

let isEditing = false;
let taskToEdit = null;

// Save current tasks to localStorage
const saveToLocalStorage = () => {
  const pendingTasks = [];
  pendingTask.querySelectorAll("li").forEach((li) => {
    console.log("Pending task: ==============", li);
    const p = li.querySelector("p"); // if exist then 'p' otherwise 'undefined'
    if (p) {
      pendingTasks.push(p.textContent); // jdi p er value thake tahole korbo only otherwise not to do.
    }
  });

  console.log("Pending tasks: ======*****========", pendingTasks);

  const completedTasks = [];
  completedTask.querySelectorAll("li").forEach((li) => {
    console.log("Completed task: ==============", li);
    const p = li.querySelector("p");
    if (p) completedTasks.push(p.textContent);
  });

  console.log("Completed tasks: ======*****========", completedTasks);

  // pendingTasks = ['Task 1', 'Task 2', 'Task 3'];
  // JSON.stringify(['Task 1', 'Task 2', 'Task 3'])
  // "['Task 1','Task 2','Task 3']"

  // JSON.parse("['Task 1','Task 2','Task 3']")
  // ['Task 1', 'Task 2', 'Task 3']

  localStorage.setItem("pending", JSON.stringify(pendingTasks));
  localStorage.setItem("complete", JSON.stringify(completedTasks));
};

// Add or Edit a Task
const addOrEditTaskFn = () => {
  let taskText = inputField.value.trim();

  if (taskText === "") {
    alert("😮 Task cannot be empty");
    return;
  }

  if (taskText.length > 10) {
    alert("😮 Task cannot be more than 10 characters");
    return;
  }

  if (isEditing) {
    // Editing existing task
    const p = taskToEdit.querySelector("p");
    p.textContent = taskText;
    p.style.fontWeight = "bold";

    addTaskBtn.textContent = "Add Task";
    inputField.value = "";
    isEditing = false;
    taskToEdit = null;
  } else {
    // Adding new task
    const li = document.createElement("li");
    const input = document.createElement("input");
    const p = document.createElement("p");
    const button = document.createElement("button");

    input.type = "checkbox";
    p.innerHTML = taskText;
    button.className = "edit";
    button.innerHTML = "✏️";

    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(button);

    pendingTask.appendChild(li);
    inputField.value = "";
  }

  saveToLocalStorage();
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
  saveToLocalStorage();
};

// Event Listeners
addTaskBtn.addEventListener("click", addOrEditTaskFn);

// Event Delegation for Pending Tasks
pendingTask.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const li = event.target.parentNode;
    moveToCompleted(li);
  }
});

// Event Delegation for Completed Tasks (Delete)
completedTask.addEventListener("click", (event) => {
  if (event.target.id === "btn-del") {
    const li = event.target.parentNode;
    li.remove();
    saveToLocalStorage();
  }
});

// Event Delegation for Edit Button
pendingTask.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit")) {
    const button = event.target;
    const li = button.parentNode;
    const p = li.querySelector("p");

    if (p && li) {
      inputField.value = p.textContent;
      addTaskBtn.textContent = "Edit Task";
      isEditing = true;
      taskToEdit = li;
    }
  }
});

// Load existing tasks when page loads
const renderTasks = () => {
  pending.forEach((taskText) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const p = document.createElement("p");
    const button = document.createElement("button");

    input.type = "checkbox";
    p.innerHTML = taskText;
    button.className = "edit";
    button.innerHTML = "✏️";

    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(button);

    pendingTask.appendChild(li);
  });

  complete.forEach((taskText) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");

    p.innerHTML = taskText;
    button.id = "btn-del";
    button.textContent = "🗑️";

    li.appendChild(p);
    li.appendChild(button);

    completedTask.appendChild(li);
  });
};

renderTasks();
