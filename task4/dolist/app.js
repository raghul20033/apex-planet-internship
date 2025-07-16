function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => deleteTask(index);
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  loadTasks();
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

window.onload = loadTasks;