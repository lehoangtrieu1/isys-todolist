console.log("script Loaded");

// 1. Assign variable to DOM elements
let addTaskButton = document.getElementById("add-button")
let newTaskInput = document.getElementById("task-input")
let todoContainer = document.getElementById("todo-list")

// 2. Write function to handle the events (read value -- clear the box-- read the value)
function onAddTaskClicked(event) {
    let taskName = newTaskInput.value;
    newTaskInput.value = ""
    todoContainer.insertAdjacentHTML('afterbegin', taskName)
}

// 3. link, element, event to the function
addTaskButton.addEventListener('click',onAddTaskClicked)



