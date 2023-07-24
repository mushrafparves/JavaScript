var taskList = [];

function addTask() {
  var taskInput = document.getElementById('taskInput');

  var newTask = {
    id: Date.now(),
    text: taskInput.value,
    completed: false
  };

  taskList.push(newTask);
  
  taskInput.value = '';

  renderTasks();
}

function renderTasks() {
  var taskListElem = document.getElementById('taskList');
  
  taskListElem.innerHTML = '';
  
  taskList.forEach (function(task) {
    var taskElem = document.createElement('li');
  }
}