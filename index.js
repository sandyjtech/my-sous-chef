//Global variables
const enabledDietary = [];

//Fetch Request and Function
//const myApiKey= process.env.RAPID_API_KEY;
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${myApiKey}`,
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

//DOM Elements
const container = document.querySelector("#container")
const recipeContainer = document.querySelector("#recipe-container");
const vegetarian = document.querySelector('#64469')
const vegan = document.querySelector('#64468')
const glutenFree = document.querySelector('#64465')
const dairyFree = document.querySelector('#64463')
const form = document.querySelector('#dietary-form')
//const book = document.querySelector('.book')
const checkboxes = document.querySelectorAll('input[type="checkbox"]') //added "" to checkbox
//Create Global Elements//create recipe container elements
let img = document.createElement("img");
let receipe = document.createElement("h2");
let receipeName = document.createElement("h3");
let ingredientsList = document.createElement("ul");
let instructions = document.createElement("h4")
let instructionsName = document.createElement("p")
	let eachIngredient = document.createElement("li");
let ingredient = document.createElement("h4");

//select all checkboxes with the type=checkbox 

//Render Function
function renderRecipes(recipesArray){
	console.log(recipesArray);
	recipesArray.forEach(displayRecipe);
}
//Event Listeners

//need to change hover to an event listener in CSS
//closedBook.addEventListener('click', renderRecipes)//not sure if that's right?
book.addEventListener('click', renderRecipes)


//Event Handlers
function displayRecipe(recipeObject) {

	// remove hidden classs
	form.classList.remove("dietary-form");
	
	//Assign each elements to variables
	img.src = "./chef.png";
	img.alt = "chef";
	receipe.textContent = "Recipe";
	receipeName.textContent = recipeObject.name;
	eachIngredient.textContent = "Ingredients";
	eachIngredient.textContent = "Ingredients are blaaaaaaa";
	instructions.textContent = "Instructions";
	instructionsName.textContent = "Instructions are blaaaaaaa";

	//Append elements to container


	recipeContainer.appendChild(receipe)
	recipeContainer.appendChild(img)
	recipeContainer.appendChild(receipeName)

	ingredientsList.appendChild(eachIngredient);
	recipeContainer.appendChild(ingredientsList)
	recipeContainer.appendChild(eachIngredient)
	recipeContainer.appendChild(instructions)
	recipeContainer.appendChild(instructionsName)

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
async function getRecipes() {
	try {
	  const response = await fetch(url, options);
	  const responseData = await response.json(); // Parse response as JSON
	  const recipesArray = responseData.results; // Extract the 'results' array from the response data
	  renderRecipes(recipesArray);
	  console.log(recipesArray);
	} catch (error) {
	  console.error(error);
	}
  }

/*
  <form id="dietary-form">
 	<label>  
 		<input type="checkbox" id="64469" name="vegetarian" value="Vegetarian">
		Vegetarian
	</label>
	<label> 
    	<input type="checkbox" id="64468 " name="vegan" value="Vegan">
		Vegan
	</label>
	<label> 
    	<input type="checkbox" id="64465 " name="gluten_free" value="Gluten-Free">
		Gluten-Free
	</label>
	<label> 
    	<input type="checkbox" id="64463 " name="dairy_free" value="Dairy-Free">
		Dairy-Free
	</label>    
  </form>
  */