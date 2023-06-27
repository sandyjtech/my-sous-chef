//Global variables

//Fetch Request and Function
const myApiKey= process.env.RAPID_API_KEY;
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${myApiKey}`,
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};
async function getRecipes() {
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
getRecipes()

//DOM Elements
const container = document.querySelector("#container")
const recipeContainer = document.querySelector("#recipe-container");
const vegetarian = document.querySelector('#64469')
const vegan = document.querySelector('#64468')
const glutenFree = document.querySelector('#64465')
const dairyFree = document.querySelector('#64463')
const form = document.querySelector('#dietary-form')
const closedBook = document.querySelector('.book')

//Render Function

//Event Listeners

form.addEventListener('change', dietary)//not sure if that's right either
book.addEventListener('click', openRecipe)//not sure if that's right?

//Event Handlers
function openRecipe() {
	e.preventDefault()
	// remove hidden classs
	form.classList.remove("dietary-form");
	//create recipe container elements
	let img = document.createElement("img");
	let recipeHeader = document.createElement("h2");
	let ingredientsList = document.createElement("ul");
	let ingredientsTitle = document.createElement("h3")
    let eachIngredient = document.createElement("li");

	ingredientsTitle.appendChild()
	recipeContainer.appendChild()

}
//After page load
function dietary() {
	e.preventDefault()
	
	//not sure how to handle, need to look up checkbox handling and wait for render function
}


//Initializers

