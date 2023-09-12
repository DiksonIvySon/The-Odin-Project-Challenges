
//lists to contain all of the toDos added
let allToDoList = [];
let todayList = [];
let nextWeekList = [];
let recycleList = [];
let doneActivitiesList = [];
let selectedArray;
//let previouslySelectedArray;

//Object to contain the user profile information
let userProfile = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
}

// function to convert the form inputs to a single todo object
function toDo(title, description, notes, dueDate, option, priority) {
    this.title = title;
    this.description = description;
    this.notes = notes;
    this.dueDate = dueDate;
    this.option = option;
    this.priority = priority;
}

//function to render the todo event to the main when it is added using the add form
function renderTodo(option) {
    let toDosContainer;
    let previouslySelectedArray;

    if (option === "today") {
        toDosContainer = document.querySelector('#today');
        selectedArray = todayList;
        previouslySelectedArray = "todayList";
    }
    else if (option === "nextWeek") {
        toDosContainer = document.querySelector('#nextWeek');
        selectedArray = nextWeekList;
        previouslySelectedArray = "nextWeekList";
    }
    else if (option === "recycleBin") {
        toDosContainer = document.querySelector('#recycle-Bin');
        selectedArray = recycleList;
        previouslySelectedArray = "recycleList";
    }
    else if (option === "doneActivities") {
        toDosContainer = document.querySelector('#doneActivities');
        selectedArray = doneActivitiesList;
        previouslySelectedArray = "doneActivitiesList";
    }
    else {
        toDosContainer = document.querySelector('#allToDos');
        selectedArray = allToDoList;
        //previouslySelectedArray = "allToDoList";
    }

    toDosContainer.textContent = "";

    for (let i = 0; i < selectedArray.length; i++) {
        let todo = selectedArray[i];
        let priorityColor = setPriorityColor(i); 
        let todoDiv = document.createElement('div');
        todoDiv.setAttribute('class', 'todo-item');
        todoDiv.innerHTML = ` 
                                <div class="item-properties">
                                    <div class="priority-box" style="background-color: ${priorityColor}"></div>
                                    <div class="item-properties-container">
                                        <div class="titleDate">
                                            <h2 class="item-title">${todo.title}</h2>
                                            <h4 class="Due date">${todo.dueDate}</h4>
                                        </div>
                                        <hr>
                                        <div class="descriptionAndButtons">
                                            <div>
                                                <h4>Description:</h4>
                                                <p class="item-description">${todo.description}</p>
                                            </div>
                                            <div class="itemButtons-Container">
                                                <button class="item-notes edit" onclick="displayPopUp(${i})">Notes</button>
                                                <button class="edit" onclick="popUpEditForm(${i}, ${previouslySelectedArray}, ${option})"><i class="fa-solid fa-pen"></i></button>
                                                <button class="delete-btn edit" onclick="removeToDo(${i}, ${previouslySelectedArray})"><i class="fa-solid fa-trash-can"></i></button>
                                            </div>
                                        </div>
                                        <input type="checkbox" id="checkbox" name="checkbox" onclick="handleCheckBox(${i}, ${previouslySelectedArray})">
                                    </div>
                                </div>
                            `;

    toDosContainer.appendChild(todoDiv);
    }
}

//function that will take all of the input values and store them as constants.
//And also call the toDo function which will then add the new toDo to selectedArray array
function addToDo() {
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let notes = document.querySelector('#notes').value;
    let dueDate = document.querySelector('#date').value;
    let option = document.querySelector('#taskFolder').value;

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
    let newToDo = new toDo(title, description, notes, dueDate, option, priority);
    
    //adding the new toDo to an array
    if (option === "today") {
        todayList.push(newToDo);
        renderTodo(option); //must be included to call the renderTodo function.

        allToDoList.push(newToDo); //must always add to allToDoList
        renderTodo('allToDo'); 
    }
    else if (option === "nextWeek") {
        nextWeekList.push(newToDo);
        renderTodo(option); 

        allToDoList.push(newToDo); 
        renderTodo('allToDo'); 
    }

    //update the index ID
    //index_ID += 1;
};

//function to remove the todo activity when delete button is clicked
function removeToDo(index, previouslySelectedArray) {

    //making deleted item to go to recycle bin
    recycleList.push(previouslySelectedArray[index]);

    //deleting the item
    selectedArray.splice(index, 1);
    previouslySelectedArray.splice(index, 1);
    
    //must re-render the lists of toDos after removing a todo activity.
    renderTodo("today"); 
    renderTodo("nextWeek"); 
    renderTodo("allToDos"); 
    renderTodo("recycleBin");
    renderTodo("doneActivities"); 
}

//function to add items to the done projects array
function handleCheckBox(index, previouslySelectedArray) {
    doneActivitiesList.push(previouslySelectedArray[index]);
    
    //Rerender done activities to show on the UI
    renderTodo("doneActivities");
}

//event handler to handle the click on the Activity button and call the addToDo function.
document.querySelector('.add-btn').addEventListener('click', function(event) {
    event.preventDefault();
    addToDo();
    hideOrReveal('#addForm'); //this will close the form
});

//event handler to handle the click on the Activity button and call the addToDo function.
document.querySelector('.add-project').addEventListener('click', function() {
    let projectTitle = document.querySelector('#ProjectTitle').value;
    let addedProjects = document.querySelector('.added-projects');
    
    let newProject = document.createElement('button');
    newProject.setAttribute('class', projectTitle);
    newProject.innerHTML = projectTitle;

    addedProjects.appendChild(newProject);

    let taskFolder = document.querySelector('#taskFolder');
    let newProjectOption = document.createElement('option');
    newProjectOption.setAttribute('class',projectTitle);
    newProjectOption.setAttribute('value', projectTitle);
    newProjectOption.innerHTML = projectTitle;
    taskFolder.appendChild(newProjectOption); 
})


//function for the form to be revealed and hidden when the add toDo button is clicked
function hideOrReveal(form) {
    let addToDoForm = document.querySelector(form);
    if (addToDoForm.style.display == 'none') {
        addToDoForm.style.display = 'block';
        asb();
    }
    else {
        addToDoForm.style.display = 'none';
        asb();
    }
}

//listen to when add-section-button is click
let addSectionButton = document.querySelector('.add-section-button');
addSectionButton.addEventListener('click', function() {
    hideOrReveal('#addForm');
});

//list to when cancel-button is clicked
let cancelButton = document.querySelector('.cancel-form-button');
cancelButton.addEventListener('click', function() {
    hideOrReveal('#addForm');
});

//function to hide or reveal the add a ToDo activity button
function asb() {
    //addSectionButton is already defined above
    let addToDoForm = document.querySelector('#addForm');
    if (addToDoForm.style.display == 'none') {
        addSectionButton.style.display = 'block';
    }
    else if (addToDoForm.style.display == 'block') {
        addSectionButton.style.display = 'none';
    }
}



//function to popup an edit item form when the edit button is clicked
function popUpEditForm(index, previouslySelectedArray, option) {

    let pass_previouslySelectedArray;   
    
    if (option === "today") {
        pass_previouslySelectedArray = "todayList";
    }
    else if (option === "nextWeek") {
        pass_previouslySelectedArray = "nextWeekList";
    }
    else if (option === "recycleBin") {
        pass_previouslySelectedArray = "recycleList";
    }
    else if (option === "doneActivities") {
        pass_previouslySelectedArray = "doneActivitiesList";
    }
    else {
        pass_previouslySelectedArray = "allToDoList";
    }
  
    console.log(pass_previouslySelectedArray);

    
    console.log(allToDoList);
    console.log(todayList);
    console.log(nextWeekList);

    let popUpContent = document.querySelector('.pop-up-content');
    popUpContent.textContent = "";
    let editForm_div = document.createElement('div');
    editForm_div.setAttribute('class', 'editingForm')
    editForm_div.innerHTML = `
                                <form action="" id="editItemForm" style="display: block">
                                <div>
                                    <label for="editItem-title">Title</label>
                                    <br>
                                    <input type="text" id="editItem-title" name="editItem-title" placeholder="${previouslySelectedArray[index].title}">
                                </div>
                                <div>
                                    <label for="editItem-description">Description</label>
                                    <br>
                                    <input type="text" id="editItem-description" name="editItem-description" placeholder="${previouslySelectedArray[index].description}">
                                </div>
                                <div>
                                    <label for="editItem-notes">Notes</label>
                                    <br>
                                    <textarea name="editItem-notes" id="editItem-notes" form="form" placeholder="${previouslySelectedArray[index].notes}"></textarea>
                                </div>
                                <div>
                                    <label for="editItem-date">Due date</label>
                                    <br>
                                    <input type="date" id="editItem-date" name="editItem-date" placeholder="${previouslySelectedArray[index].date}">
                                </div>
                                <div class="radio-buttons">
                                    <div>
                                        <input type="radio" id="editItem-priority-low" name="editItem-priority" value="low">
                                        <label for="editItem-priority-low">Low</label><br>
                                    </div>
                                    <div>
                                        <input type="radio" id="editItem-priority-medium" name="editItem-priority" value="medium">
                                        <label for="editItem-priority-medium">Medium</label><br>
                                    </div>
                                    <div>
                                        <input type="radio" id="editItem-priority-high" name="editItem-priority" value="high">
                                        <label for="editItem-priority-high">High</label>
                                    </div>
                                </div>

                                <div class="add-btn-container">
                                    <button class="apply-changes-btn" type="button" onclick="handleApplyItemChanges(${index}, ${pass_previouslySelectedArray})">Apply Item Changes</button>
                                </div>  
                            </form>
                             `;
 hideOrReveal('.pop-up');
 popUpContent.appendChild(editForm_div);
 
}


//function to make changes when the apply change button is clicked.
function handleApplyItemChanges(index, pass_previouslySelectedArray) {

    console.log(pass_previouslySelectedArray);

    hideOrReveal('.pop-up');

    let editItem_title = document.querySelector('#editItem-title').value;
    let editItem_description = document.querySelector('#editItem-description').value;
    let editItem_notes = document.querySelector('#editItem-notes').value;
    let editItem_dueDate = document.querySelector('#editItem-date').value;

    //function to get the checked value of the radio buttons
    function radioValue() {
        let radioButtons = document.getElementsByName('editItem-priority');
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                return radioButtons[i].value;
            }
        }
    }
    let editItem_priority = radioValue();

    //edit the item from it's root object which is in an array.
    pass_previouslySelectedArray[index].title = editItem_title;
    pass_previouslySelectedArray[index].description = editItem_description;
    pass_previouslySelectedArray[index].notes = editItem_notes;
    pass_previouslySelectedArray[index].dueDate = editItem_dueDate;
    pass_previouslySelectedArray[index].priority = editItem_priority;

    //must re-render the lists of toDos after editing a todo activity.
    renderTodo("today"); 
    renderTodo("nextWeek"); 
    renderTodo("allToDos"); 
    renderTodo("recycleBin");
    renderTodo("doneActivities"); 
};

/*
let itemNotes = document.querySelectorAll('.item-notes');
itemNotes.forEach(itemNote => {
    itemNote.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
    }
});

let popUpCancel = document.querySelector('.pop-up-cancel');
popUpCancel.addEventListener('click', function() {
    document.querySelector('.pop-up').style.display = 'none';
})
*/

//function to display pop-up when the note button is clicked
function displayPopUp(index) {
    document.querySelector('.pop-up').style.display = 'block';

    let displayNotes = selectedArray[index].notes;
    let popUpContent = document.querySelector('.pop-up-content');
    popUpContent.textContent = displayNotes;
}

//function to remove the pop-up when the cancel button is clicked
function removePopUp() {
    document.querySelector('.pop-up').style.display = 'none';
}

//function to manage the priority color to be displayed
function setPriorityColor(index) {
    if (selectedArray[index].priority === "low") {
        return "green";
    }
    else if (selectedArray[index].priority === "medium") {
        return "blue";
    }
    else if (selectedArray[index].priority === "high") {
        return "red";
    }
    else {
        //call a function that will automatically set the priority using the date provided
        //still have to create the function, it will most likely make a call back to the setPriorityColor function
    }
}


//Making the view all projects button function
let viewAllProjects = document.querySelector('.viewAllProjects');
viewAllProjects.addEventListener('click', function() {
    hideOrReveal('.project-container');
})


//function to hide or reveal the add project form
let addProjectButton = document.querySelector('.add-project-button');
addProjectButton.addEventListener('click', function() {
    hideOrReveal('#addProjectForm');
});

let cancelProjectFormButton = document.querySelector('.cancel-project-form-button');
cancelProjectFormButton.addEventListener('click', function() {
    hideOrReveal('#addProjectForm');
});


//
function openActivity(evt, activityName) {
    
  
    // Get all elements with class="tabContent" and hide them
    let tabContent = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    // Get all elements with class="tabLinks" and remove the class "active"
    let tabLinks = document.getElementsByClassName("tabLinks");
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(activityName).style.display = "block";
    evt.currentTarget.className += " active";

    //hide the hamburger navbar menu if the doneActivities or recycle buttons is clicked
    if (activityName === "doneActivities" || activityName === "recycle-Bin") {
        hideOrReveal('.nav-bar-menu');
    }
}

//function to manage the burger nav bar
function handleNavBar() {
    hideOrReveal('.nav-bar-menu');
} 

//function to manage the login/out button
function handleLoginOut() {
    hideOrReveal('.nav-bar-menu');
} 

//function to manage the settings button
function handleSetting() {
    console.log("hey");
    let settingSubs = document.querySelectorAll('.setting-sub');
    settingSubs.forEach(settingSub => {
        if (settingSub.style.display === "block") {
            settingSub.style.display = "none";
        }
        else {
            settingSub.style.display = "block";
        }
    }) 
} 

function handleCreateAccountForm() {
    hideOrReveal('.createAccountForm');
    
    let createAccountForm = document.querySelector('createAccountForm');
    let loginForm = document.querySelector('.loginForm-d');
    
    if (createAccountForm.style.display === 'none') {
        loginForm.style.display = 'block';
    }
    else if (createAccountForm.style.display === 'block') {
        loginForm.style.display = 'none';
    }

    //Call a function to allow only one of the forms to show at a time
    hideOneForm(createAccountForm, loginForm);
}

function submitCreateAccountForm() {
    let first_name = document.querySelector('#first-name').value;
    let last_name = document.querySelector('#last-name').value;
    let email = document.querySelector('#email').value;
    let phone_number = document.querySelector('#phone-number').value;
    let password = document.querySelector('#user-password').value;

    //updating the profile information properties
    userProfile.first_name = first_name;
    userProfile.last_name = last_name;
    userProfile.email = email;
    userProfile.phone_number = phone_number;
    userProfile.password = password;

    displayProfileData()
}


function submitUpdateProfileForm(){
    let first_name = document.querySelector('#update-first-name').value;
    let last_name = document.querySelector('#update-last-name').value;
    let email = document.querySelector('#update-email').value;
    let phone_number = document.querySelector('#update-phone-number').value;

    //updating the profile information properties
    userProfile.first_name = first_name;
    userProfile.last_name = last_name;
    userProfile.email = email;
    userProfile.phone_number = phone_number;

    displayProfileData();
}

function displayProfileData() {

    console.log(userProfile.first_name);
    console.log(userProfile.last_name);
    console.log(userProfile.email);
    console.log(userProfile.phone_number);

    let profile_first_name = document.querySelector('.profile-first-name');
    let profile_last_name = document.querySelector('.profile-last-name');
    let profile_email = document.querySelector('.profile-email');
    let profile_phone_number = document.querySelector('.profile-phone-number');

    profile_first_name.textContent = "";
    profile_last_name.textContent = "";
    profile_email.textContent = "";
    profile_phone_number.textContent = "";

    profile_first_name.textContent = userProfile.first_name;
    profile_last_name.textContent = userProfile.last_name;
    profile_email.textContent = userProfile.email;
    profile_phone_number.textContent = userProfile.phone_number;

    //code to display the user name on the menu tab
    let menuTab_firstName = document.querySelector('.menuTab-firstName');
    let menuTab_lastName = document.querySelector('.menuTab-lastName');
    menuTab_firstName.textContent = userProfile.first_name;
    menuTab_lastName.textContent = userProfile.last_name;
}

//function to allow only one of the forms to show at a time
function hideOneForm(createAccountForm, loginForm) {
 
}

function handleSidebar() {
    hideOrReveal('.side-bar');

    //hide the burger menu
    hideOrReveal('.nav-bar-menu');

    //toggle from show side bar to hide side bar and vise versa
    let toggleSideBar = document.querySelector('.toggle-side-bar-text');
    if (toggleSideBar.textContent === "Hide Side-Bar") {
        toggleSideBar.textContent = "Show Side-Bar";
    }
    else {
        toggleSideBar.textContent = "Hide Side-Bar";
    }
}

function handleUpdateProfileButton() {
    //let panel = document.querySelector('.panel');
    hideOrReveal('.panel')
}







