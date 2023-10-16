
//making the search button work
let search_button = document.querySelector('#search-button');
search_button.addEventListener('click', handleSearch);

//function to handle search button click
function handleSearch() {
    let search_input = document.querySelector('#search-input').value.trim();
    fetchData("https:/www.themealdb.com/api/json/v1/1/filter.php?i=chicken");
}

async function fetchData(link) {
    const response = await fetch(link, {mode: 'cors'})
    const recipeData = await response.json();
    console.log(recipeData);
}

