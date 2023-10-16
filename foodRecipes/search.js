
//making the search button work
let search_button = document.querySelector('#search-button');
search_button.addEventListener('click', handleSearch);

//function to handle search button click
function handleSearch() {
    let search_input = document.querySelector('#search-input').value.trim();
    let link = "https:/www.themealdb.com/api/json/v1/1/filter.php?i=" + search_input;
    fetchData(link);
}

async function fetchData(link) {
    const response = await fetch(link, {mode: 'cors'})
    const recipeData = await response.json();
    
    if (recipeData.meals == null){
        document.querySelector("#noResults-message").style.display = 'block';
    }
    else (
        displayResults(recipeData)
    )
}

function displayResults(recipeData) {
    console.log(recipeData);
    let recipe_cards_container = document.querySelector('#recipe-cards');
    recipe_cards_container.textContent = '';

    for (let i = 0; i < recipeData.meals.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('class', 'card')
        card.innerHTML = `
                            <img src=${recipeData.meals[i].strMealThumb} alt="food image" style="width:100%">
                            <div class="container">
                                <h4><b>${recipeData.meals[i].strMeal}</b></h4>
                                <button onclick="fetchViewRecipeData(${recipeData.meals[i].idMeal})">View the Recipe</button>
                            </div>
                         `;

    recipe_cards_container.appendChild(card);
    console.log("done");
    }
}

async function fetchViewRecipeData(idMeal) {
    const response = await fetch("https:/www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal, {mode: 'cors'})
    const viewRecipeData = await response.json();
    console.log(viewRecipeData)
    /*if (viewRecipeData.meals == null){
        document.querySelector("#noResults-message").style.display = 'block';
    }
    else (
        displayViewRecipeData(viewRecipeData)
    )*/
}

