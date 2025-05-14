function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement('li');
  li.textContent = task;
  document.getElementById('taskList').appendChild(li);
  input.value = '';

  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#taskList li').forEach(li => {
    tasks.push(li.textContent);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    document.getElementById('taskList').appendChild(li);
  });
}

window.onload = loadTasks;
