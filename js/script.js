
console.log("script Loaded");

// 1. Assign variables to DOM elements
let addTaskButton = document.getElementById("add-button");
let newTaskInput = document.getElementById("task-input");
let todoContainer = document.getElementById("todo-list");
let templateElement = document.getElementById("todo-item-template");
let template = templateElement.innerHTML; // Corrected assignment

// 2. Write function to handle the events (read value -- clear the box-- read the value)
function onAddTaskClicked(event) {
    // Get the contents of the input box
    let taskName = newTaskInput.value;
    // Clear the input box
    newTaskInput.value = "";

    // Replace the placeholder in the template with the task name
    let todoHTML = template.replace("<!--TASK_NAME-->", taskName); // Corrected method

    // Insert the formatted HTML into the todo container
    todoContainer.insertAdjacentHTML('afterbegin', todoHTML);
}

function onTodoClicked(event){
    let targetElement = event.toElement
    
    //"!"" mean not
    while(!targetElement.classList.contains("task")){
        targetElement = targetElement.parentElenemt
    }
    let checkbox = targetElement.querySelector(".checkbox")
    if (checkbox,checked){
        targetElement.classList.add("completed")
    } else {
        targetElement.classList.remove("completed")
    }
}
// 3. Link event to the function
addTaskButton.addEventListener('click', onAddTaskClicked);
todoContainer.addEventListener('click', onTodoClicked);