document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function() {
        listItem.remove();
    });
        
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = '';
});

document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});