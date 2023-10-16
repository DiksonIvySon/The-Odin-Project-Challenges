

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
    document.querySelector("#noResults-message").style.display = 'none';

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
    if (viewRecipeData.meals == null){
        document.querySelector("#noResults-message").style.display = 'block';
    }
    else (
        displayViewRecipeData(viewRecipeData)
    )
}

function displayViewRecipeData(viewRecipeData) {
    let popUp_container = document.querySelector('#pop-up');
    document.querySelector("#noResults-message").style.display = 'none';
    let recipe_ingredients = handleIngredients(viewRecipeData);
    popUp_container.textContent = '';
    let popUp = document.createElement('div');
    popUp.innerHTML = `
                        <div class="close-popUp">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                        <div class="popUp-image-container">
                            <img src=${viewRecipeData.meals[0].strMealThumb} alt="meal image" style="width:100%">
                            <div class="popUp-image-text">
                                <h1 class="popUp-recipe-name">${viewRecipeData.meals[0].strMeal}</h1>
                                <h6 class="popUp-recipe-category">Meal Category: ${viewRecipeData.meals[0].strCategory}</h6>
                            </div>
                        </div>
                        <div class="popUp-container">
                            <h4><b>Ingredients:</b></h4>
                            <p class="instructions">
                                ${recipe_ingredients}
                            </p>
                            <h4><b>Instructions:</b></h4>
                            <p class="instructions">
                                ${viewRecipeData.meals[0].strInstructions}
                            </p>
                            <a target="_blank" href=${viewRecipeData.meals[0].strYoutube}>
                                <button>Watch YouTub Video</button>
                            </a>
                        </div>
                      `

    popUp_container.appendChild(popUp);
    popUp_container.style.display = 'block';
}


// function to handle the ingredients to be one string
function handleIngredients(viewRecipeData) {

    let ingredients_string ="You will need";

    let ingredientsList = [
        viewRecipeData.meals[0].strIngredient,
        viewRecipeData.meals[0].strIngredient1,
        viewRecipeData.meals[0].strIngredient2,
        viewRecipeData.meals[0].strIngredient3,
        viewRecipeData.meals[0].strIngredient4,
        viewRecipeData.meals[0].strIngredient5,
        viewRecipeData.meals[0].strIngredient6,
        viewRecipeData.meals[0].strIngredient7,
        viewRecipeData.meals[0].strIngredient8,
        viewRecipeData.meals[0].strIngredient9,
        viewRecipeData.meals[0].strIngredient10,
        viewRecipeData.meals[0].strIngredient11,
        viewRecipeData.meals[0].strIngredient12,
        viewRecipeData.meals[0].strIngredient13,
        viewRecipeData.meals[0].strIngredient14,
        viewRecipeData.meals[0].strIngredient15,
        viewRecipeData.meals[0].strIngredient16,
        viewRecipeData.meals[0].strIngredient17,
        viewRecipeData.meals[0].strIngredient18,
        viewRecipeData.meals[0].strIngredient19,
        viewRecipeData.meals[0].strIngredient20,
    ]

    for (i = 0; i < ingredientsList.length; i++) {

        if (ingredientsList[i] == "" || ingredientsList[i] == null) {
            //do nothing
        }
        else {
            ingredients_string += ", " + ingredientsList[i];
        }
    }

    return ingredients_string;
}
