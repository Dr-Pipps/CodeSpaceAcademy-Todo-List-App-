// Variables

const input = document.querySelector(".todo-input")
const addButton = document.querySelector(".todo-button")
const listContent = document.querySelector(".todo-list")

// Eventlisteners

addButton.addEventListener('click', addTodo)


// Functions

function addTodo(event){

    event.preventDefault()

    

    //Creating a div for the added content 

    const content = document.createElement('div')
    content.classList.add('todo')
   

    //Creating the li element with class of task

    const addContent = document.createElement('li')
    addContent.innerText = input.value; 
    addContent.classList.add('task')

    //Placing the .task into the div of .todo
    content.appendChild(addContent)

    // Creating the Check button

    const checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class="fas fa-check"></i>'
    checkButton.classList.add("check-btn")
    content.appendChild(checkButton)

    // Creating the delete button

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add("delete-btn")
    content.appendChild(deleteButton)  

    listContent.appendChild(content)

  

}

