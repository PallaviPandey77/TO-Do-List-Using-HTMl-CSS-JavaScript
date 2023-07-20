const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
            <button onclick="toggleCompletion(this)">Done</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(li);

    taskInput.value = '';
}

// Toggle task completion status
function toggleCompletion(button) {
    const taskText = button.parentNode.previousElementSibling;
    taskText.classList.toggle('completed');
}

// Edit task
function editTask(button) {
    const taskText = button.parentNode.previousElementSibling;
    const newText = prompt('Edit the task:', taskText.textContent.trim());

    if (newText !== null && newText.trim() !== '') {
        taskText.textContent = newText.trim();
    }
}

// Delete task
function deleteTask(button) {
    const li = button.parentNode.parentNode;
    taskList.removeChild(li);
}

