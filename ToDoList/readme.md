onclick="popUpEditForm(${selectedArray},${i})"

//function to popup an edit item form when the edit button is clicked
function popUpEditForm(Array,index) {

    let popUpContent = document.querySelector('.pop-up-content');
    let editForm_div = document.createElement('div');
    editForm_div.setAttribute('class', 'editingForm')
    editForm_div.innerHTML = `
                                <form action="" id="addForm" style="display: none;">
                                <div class="cancel-form-button">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <div>
                                    <label for="title">Title</label>
                                    <br>
                                    <input type="text" id="title" name="title" placeholder="Run" required>
                                </div>
                                <div>
                                    <label for="description">Description</label>
                                    <br>
                                    <input type="text" id="description" name="description" placeholder="Dikson Manganye" required>
                                </div>
                                <div>
                                    <label for="notes">Notes</label>
                                    <br>
                                    <textarea name="notes" id="notes" form="usrform" placeholder="Write notes here..."></textarea>
                                </div>
                                <div>
                                    <label for="date">Due date</label>
                                    <br>
                                    <input type="date" id="date" name="date" placeholder="15/05/2000" required>
                                </div>
                                <div class="taskFolder">
                                    <div>
                                        <label for="selectFolder">Select a folder</label>
                                        <select name="taskFolder" id="taskFolder">
                                            <option value="today">Today</option>
                                            <option value="nextWeek">Next Week</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="radio-buttons">
                                    <div>
                                        <input type="radio" id="priority-low" name="priority" value="low">
                                        <label for="priority-low">Low</label><br>
                                    </div>
                                    <div>
                                        <input type="radio" id="priority-medium" name="priority" value="medium">
                                        <label for="priority-medium">Medium</label><br>
                                    </div>
                                    <div>
                                        <input type="radio" id="priority-high" name="priority" value="high">
                                        <label for="priority-high">High</label>
                                    </div>
                                </div>

                                <div class="add-btn-container">
                                    <button class="add-btn">Add Activity</button>
                                </div>  
                            </form>
                             `;

 popUpContent.appendChild(editForm_div);
}
