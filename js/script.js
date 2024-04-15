console.log("script Loaded");

// 1. Assign variable to DOM elements
let addTaskButton = document.getElementById("add-button")
let newTaskInput = document.getElementById("task-input")
let todoContainer = document.getElementById("todo-list")
let templateElement = document.getElementById("todo-item-template")
let template = templateElement,innerHTML

// 2. Write function to handle the events (read value -- clear the box-- read the value)
function onAddTaskClicked(event) {
    
    //get the contents of the input box
    let taskName = newTaskInput.value;
    
    //clear the input box
    newTaskInput.value = ""

    //search and replace to add task name (found above)
    let todoHTML = template.replace(</!--TASK_NAME -->, taskName)

    //we have the formatted HTML, lets insert it into the todo container
    todoContainer.insertAdjacentHTML('afterbegin', taskName)
}

// 3. link, element, event to the function
addTaskButton.addEventListener('click',onAddTaskClicked)



