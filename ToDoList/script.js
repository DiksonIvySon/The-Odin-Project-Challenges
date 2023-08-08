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