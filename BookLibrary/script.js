let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
};

// must still make use of prototypes to make the readStatus change when a user change it von the card.

function renderBook() {
    let books = document.querySelector('.books');
    books.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookContainer = document.createElement('div');
        bookContainer.setAttribute('class', 'book');
        bookContainer.innerHTML = `
                                    <div class="book-details">
                                    <div class="image">
                                        <img src="images/black-book.png" alt="book-image">
                                    </div>
                                    <div>
                                        <h2> Title: <strong>${book.title}</strong></h2>
                                        <h4>Author: <strong>${book.author}<strong></h4>
                                        <h4>Pages: <strong>${book.pages}</strong></h4>
                                        <h4>Read status: <strong>${book.readStatus}<strong></h4>
                                    </div>
                                    </div>
                                    <div class="book-remove">
                                        <div>
                                            <button class="remove-book-btn" onclick="removeBook(${i})">Remove Book</button>
                                        </div>
                                        <div>
                                            <select id="readStatus" name="readStatus">
                                                <option value="not read yet">Not read yet</option>
                                                <option value="read">Read</option>
                                            </select>
                                        </div>
                                        <div>
                                            <i class="fa-sharp fa-solid fa-star"></i>
                                        </div> 
                                    </div>
                                  `;
    books.appendChild(bookContainer);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    renderBook(); //need to re-render the list of book after removing a book.
}

//function that will take all of the input values and store them as constants.
//And also call the Book function which will then add the new book to the myLibrary array
function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let readStatus = document.querySelector('#readStatus').value;
    let myNewBook = new Book(title, author, pages, readStatus);
    
    //adding the new book to myLibrary array
    myLibrary.push(myNewBook);
    renderBook();  //must be included to call the renderBook function.
};

//const theHobbit = new Book("The Hobbit", "Person", 200, "not read yet");
//console.log(theHobbit.info());

//function for the form to be revealed and hidden when the add book button is clicked
let addSectionButton = document.querySelector('.add-section-button');
addSectionButton.addEventListener('click', function() {
    let addBookForm = document.querySelector('#add-book-form');
    if (addBookForm.style.display == 'none') {
        addBookForm.style.display = 'block';
    }
    else {
        addBookForm.style.display = 'none';
    }
})

//event handler to handle the click on the submit button and call the addBookToLibrary function.
document.querySelector('#add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
});