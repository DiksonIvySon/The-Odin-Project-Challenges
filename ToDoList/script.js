//list to contain all of the toDos added
let allToDos = [];

// function to convert the form inputs to a single todo object
function toDo(title, description, notes, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.notes = notes;
    this.dueDate = dueDate;
    this.priority = priority;
}

//function to render the todo event to the main when it is added using the add form
function renderTOdO() {
    let toDos = document.querySelector('.toDos');
    toDos.textContent = "";
    for (let i =0; i < allToDos.length; i++) {
        let todo = toDos[i];
        let todoContainer = document.createElement('div');
        todoContainer.setAttribute('class', 'todo-item');
        todoContainer.textContent = `
                                    <div class="item-properties">
                                        <div class="priority-box"></div>
                                        <h2 class="item-title">${todo.title}</h2>
                                        <h4 class="item-description">${todo.description}</h4>
                                        <button class="item-notes">${todo.notes}</button>
                                        <h4 class="Due date">${todo.dueDate}</h4>
                                        <div>
                                            <button class="edit"><i class="fa-solid fa-pen"></i></button>
                                            <button class="delete-btn edit" onclick="remove(${i})"><i class="fa-solid fa-trash-can"></i></button>
                                        </div>
                                        <input type="checkbox" id="checkbox" name="checkbox">
                                    </div>
                                    `;

    toDos.appendChild(todoContainer);
    }
}

//function that will take all of the input values and store them as constants.
//And also call the toDo function which will then add the new toDo to allToDos array
function addToDo() {
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#author').value;
    let notes = document.querySelector('#pages').value;
    let dueDate = document.querySelector('#readStatus').value;

    //function to get the checked value of the radio buttons
    function radioValue() {
        let radioButtons = document.getElementsByName('priority');
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                return radioButtons[i].value;
            }
        }
    }

    let priority = radioValue();
    let newToDo = new toDo(title, description, notes, dueDate, priority);
    
    //adding the new toDo to allToDos array
    allToDos.push(newToDo);
    removeToDo();  //must be included to call the renderBook function.
};

//function to remove the todo activity when delete button is clicked
function removeToDo(index) {
    allToDos.splice(index, 1);
    removeToDo(); //must re-render the list of toDos after removing a todo activity
}

//function for the form to be revealed and hidden when the add toDo button is clicked
let addSectionButton = document.querySelector('.add-section-button');
addSectionButton.addEventListener('click', function() {
    let addToDoForm = document.querySelector('#addForm');
    if (addToDoForm.style.display == 'none') {
        addToDoForm.style.display = 'block';
    }
    else {
        addToDoForm.style.display = 'none';
    }
})

//event handler to handle the click on the Activity button and call the addToDo function.
document.querySelector('.add-btn').addEventListener('submit', function(event) {
    event.preventDefault();
    addToDo();
});