const newTask = document.getElementById("input");
const addTask = document.getElementById("btn");
const pendingTask = document.getElementById("pending-task");
const deleteIcon = document.getElementById("btn-del");
const cTask = document.getElementById("ctask");
// Add task
const addTaskFn = () => {
  // console.log("click korci");
  let value = newTask.value;

  if (value === "") {
    alert("😮 Task cannot be empty");
    return;
  }

  if (value.length > 10) {
    alert("😮 Task cannot be more than 10");
    return;
  }

  console.log(value);

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
  p.innerHTML = value;
  button.className = "edit";
  button.innerHTML = "✏️";

  li.appendChild(input); // <li><input /></li>
  li.appendChild(p); //
  li.appendChild(button); //

  console.log(li);
  console.dir(li);

  pendingTask.appendChild(li);

  newTask.value = "";
};

// delete

const deleteTaskFn = () => {
  cTask.remove();
};

addTask.addEventListener("click", addTaskFn);
deleteIcon.addEventListener("click", deleteTaskFn);
