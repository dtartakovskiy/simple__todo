// Define UI variables
const form  = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
	// Add task event
	form.addEventListener('submit', addTask);
	// Remove task event
	taskList.addEventListener('click', removeTask);
	// Clear task event
	clearBtn.addEventListener('click', removeTasks);
	// Filter tasks
	filter.addEventListener('keyup', filterTasks);
}

// Add a task
function addTask(e) {
	e.preventDefault();

	if (taskInput.value === '') {
		alert('Add a task')
	} else {
		// Create li element
		const li = document.createElement('li');
		// Add a class
		li.className = 'collection-item';
		// Create text node and append to li
		li.appendChild(document.createTextNode(taskInput.value));
		//Create new link element
		const link = document.createElement('a');
		// Add class to the link
		link.className = 'delete-item secondary-content';
		// Add icon html
		link.innerHTML = '<i class="fa fa-remove"></i>';
		// Append the link to li
		li.appendChild(link);
		// Append li to ul
		taskList.appendChild(li);
		// Clear input
		taskInput.value = '';
	}
}

// Remove task event
function removeTask(e) {
	e.preventDefault();

	if (e.target.parentElement.classList.contains('delete-item')) {
		// Find a parent
		const parent = e.target.closest('li');
		
		if (confirm('Are you sure')) {
			parent.remove();
		}
	}
}

// Remove tasks
function removeTasks () {
	const tasksArr = Array.from(taskList.children);
	
	if(confirm('Are you sure?')) {
		// tasksArr.forEach(function (task) {
		// 	task.remove();
		// });
		while(taskList.firstChild) {
			taskList.removeChild(taskList.firstChild);
		}
	}
}

// Filter tasks
function filterTasks (e) {
	const text = e.target.value.toLowerCase();
	const tasks = document.querySelectorAll('.collection-item');

	tasks.forEach(function (task) {
		const item = task.textContent;
		
		if (item.toLowerCase().indexOf(text) !== -1) {
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});
}