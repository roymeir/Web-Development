const form = document.getElementById("Form");
const input = document.getElementById("Input");
const taskList = document.getElementById("Task_list");

const selectAll_button = document.createElement("li");
$(selectAll_button).html("Select All");
taskList.appendChild(selectAll_button);

console.log(form, input, taskList);

form.onsubmit = (e) => {
  e.preventDefault();
  addTask();
};

function addTask(task) {
  let taskValue = input.value;

  task ? (taskValue = task.text) : task;

  taskValue ? displayTask() : taskValue;

  function displayTask() {
    const newTask = document.createElement("li");
    $(newTask).html(taskValue);
    taskList.appendChild(newTask);

    newTask.onclick = () => {
      select_task(newTask);
    };

    selectAll_button.onclick = () => {
      $('#Task_list li:not(:first)').each(function() {
        select_task(this);
      })
    };
    input.value = "";
  }
}


function select_task(newTask) {
  newTask.classList.toggle("completed");

  newTask.classList.contains("completed") ?
    ((newTask.innerHTML = `<span>${newTask.innerHTML} &#10004;</span><span onclick='deleteTask()'>&#10060</span>`),
      newTask.classList.toggle("delete_task")) :
    ((newTask.innerHTML = `${newTask.innerHTML.charAt(6)}`),
      newTask.classList.toggle("delete_task"));
}

// delete task function

function deleteTask() {
  document.querySelectorAll("li").forEach((element) => {
    element.classList.contains("delete_task") ? element.remove() : element;
  });
}
