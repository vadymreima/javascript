const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span><button class="deleteButton">Видалити</button>`;
    taskList.appendChild(li);
    taskInput.value = '';

    const deleteButton = li.querySelector('.deleteButton');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(li);
    });
  }
}
