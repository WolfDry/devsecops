const form = document.getElementById('add-task-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTaskInput = document.getElementById('new-task');
    const newTask = newTaskInput.value.trim();
    if (newTask) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <div class="task-text">${newTask}</div>
            <div class="actions">
                <button class="complete-task">Complete</button>
                <button class="delete-task">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        newTaskInput.value = '';
        taskItem.querySelector('.complete-task').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        taskItem.querySelector('.delete-task').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});