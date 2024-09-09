document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        todoList.appendChild(li);
        taskInput.value = '';
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
