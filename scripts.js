// script.js
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');
        
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const taskInputField = document.createElement('input');
        taskInputField.type = 'text';
        taskInputField.value = taskText;
        taskInputField.disabled = true;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTask(taskInputField, editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.className = 'delete';
        deleteButton.onclick = () => deleteTask(listItem);

        listItem.appendChild(taskInputField);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}

function editTask(inputField, button) {
    if (inputField.disabled) {
        inputField.disabled = false;
        button.textContent = 'Simpan';
        inputField.focus();
    } else {
        inputField.disabled = true;
        button.textContent = 'Edit';
    }
}

function deleteTask(listItem) {
    listItem.remove();
}
