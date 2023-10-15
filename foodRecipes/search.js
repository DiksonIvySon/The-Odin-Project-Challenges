
//making the search button work
let search_button = document.querySelector('#search-button');
search_button.addEventListener('click', handleSearch);

//function to handle search button click
function handleSearch() {
    let search_input = document.querySelector('#search-input').value;
    console.log(search_input);
}