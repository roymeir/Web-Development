const form = document.getElementById("Form");
const input = document.getElementById("Input");
const taskList = document.getElementById("Task_list");

console.log(form, input, taskList);

form.onsubmit = (e) => {
  e.preventDefault();
  addTask();
};

function addTask(task) {
  let taskValue = input.value;
  //   if (task) {
  //     taskValue = task.text;
  //   }

  task ? (taskValue = task.text) : task;
  console.log(taskValue);
  taskValue ? displayTask() : taskValue;

  function displayTask() {
    const newTask = document.createElement("li");

    newTask.innerHTML = taskValue;

    newTask.onclick = () => {
      newTask.classList.toggle("completed");
      //   console.log(newTask);
      newTask.classList.contains("completed")
        ? ((newTask.innerHTML = `<span>${taskValue} &#10004;</span><span onclick='deleteTask()'>&#10060</span>`),
          newTask.classList.toggle("delete_task"))
        : ((newTask.innerHTML = `${taskValue}`),
          newTask.classList.toggle("delete_task"));
      console.log(newTask);
    };
    taskList.appendChild(newTask);

    input.value = "";
  }
}

// delete task function

function deleteTask() {
  console.log(document.querySelectorAll("li"));

  document.querySelectorAll("li").forEach((element) => {
    element.classList.contains("delete_task") ? element.remove() : element;
  });
}
