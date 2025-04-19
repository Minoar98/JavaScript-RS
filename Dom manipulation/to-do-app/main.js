const newTask = document.getElementById("input");
const addTask = document.getElementById("btn");
const pendingTask = document.getElementById("pending-task");
const checkBox = document.getElementById("checkbox");

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

//pending task

// const checkBoxFn = () => {
//   console.log("ahhahjaja");

//   console.log(checkBox.nextElementSibling.innerHTML);
//   checkBox.parentNode.remove();
// };

addTask.addEventListener("click", addTaskFn);
// checkBox.addEventListener("change", checkBoxFn);

// Delete All
document.querySelectorAll("#btn-del").forEach((button) => {
  button.addEventListener("click", () => {
    let ctask = button.parentNode;
    if (ctask) {
      ctask.remove();
    }
  });
});

// For checkbox
document.querySelectorAll(".edit").forEach((button) => {
  button.addEventListener("click", () => {
    let p = button.previousElementSibling;
    if (p) {
      console.log(p.innerHTML);
      newTask.value = p.innerHTML;

      button = newTask.nextElementSibling;
      console.log("button: ", button);
      button.innerHTML = "Edit Task";

      button.addEventListener("click", (event) => {
        console.log("newTask: ", newTask, newTask.value);
        let value = newTask.value;
        console.log("value: ", value);
        console.log("value2: ", event.target.value);

        // if (value === "") {
        //   alert("😮 Task cannot be empty");
        //   return;
        // }

        // if (value.length > 10) {
        //   alert("😮 Task cannot be more than 10");
        //   return;
        // }

        p.innerHTML = `${value} (edited)`;
        button.innerHTML = "Add Task";
        newTask.value = "";
      });
    }
  });
});
