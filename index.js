//Global variables
const enabledDietary = []

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
const checkboxes = document.querySelectorAll('input[type=checkbox])') //select all checkboxes with the type=checkbox 

//Render Function

//Event Listeners

//need to change hover to an event listener vs in CSS

closedBook.addEventListener('click', openRecipe)//not sure if that's right?



//Event Handlers
function openRecipe() {
	e.preventDefault()
	// remove hidden class
	form.classList.remove("dietary-form"); //wait don't we want to have it hidden first? and the reveal  when they click the book?
	//create recipe container elements
	let img = document.createElement("img");
	let recipeHeader = document.createElement("h2");
	let ingredientsList = document.createElement("ul");
	let ingredientsTitle = document.createElement("h3")
    let eachIngredient = document.createElement("li");

	ingredientsTitle.appendChild()
	recipeContainer.appendChild()

}

//After page loads
checkboxes.forEach(function(checkbox) { //adding an event listener to each checkbox
	checkbox.addEventListener('change', function() {
		enabledDietary =
		Array.from(checkboxes) //converts checkboxes to an array to use filter and map
		.filter(i => i.checked) //Array.filter to removed unchecked checkboxes
		.map(i => i.value) // Array.map to extract only the checkbox values from the array
	})
}) //we don't want prevent default do we? we want the page to refresh with the newly selected dietary choice


//Initializers



/*
<label>
	<input type="checkbox" id="64469" name="vegetarian" value="Vegetarian">
	Vegetarian
</label>
<label>
	<input type="checkbox" id="64468 " name="vegan" value="Vegan">
	Vegan
</label>
<label>
	<input type="checkbox" id="64465 " name="gluten_free" value="gluten-Free">
	Gluten Free
</label>
<label>
	<input type="checkbox" id="64463 " name="dairy_free" value="dairy-Free">
	Dairy Free
</label>
*/