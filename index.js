//Global variables
const enabledDietary = [];

//Fetch Request and Function
//const myApiKey= process.env.RAPID_API_KEY;
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&tags=under_30_minutes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ed85be156msh4a0c085492b2a53p13becejsn67c610670df6',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

//DOM Elements
const container = document.getElementById("container")
const recipeContainer = document.getElementById("recipe-container");
const vegetarian = document.getElementById('64469')
const vegan = document.getElementById('64468')
const glutenFree = document.getElementById('64465')
const dairyFree = document.getElementById('64463')
//const form = document.getElementById('dietary-form')
const book = document.querySelector('.book')
const reviewForm = document.querySelector('#review-form')
//const checkboxes = document.querySelectorAll('input[type="checkbox"]') 

//Create Global Elements//create recipe container elements
	let img = document.createElement("img");
	img.setAttribute("id", "recipe-img");
	let receipe = document.createElement("h2");
	let receipeName = document.createElement("h3");
	let ingredientsList = document.createElement("ul");
	let instructions = document.createElement("h4")
	let instructionsName = document.createElement("p")
    let eachIngredient = document.createElement("li");
	let ingredient = document.createElement("h4");
	let randomRecipeButton = document.createElement("button");

//select all checkboxes with the type=checkbox 

//Event Listeners

//need to change hover to an event listener vs in CSS
//closedBook.addEventListener('click', displayRecipe)
book.addEventListener('click', getRecipes)

//Render Function
function renderRecipes(recipesArray) {
	recipesArray.forEach(displayRecipe)
}
//Event Handlers
function displayRecipe(recipesArray) {			
//console.log(recipesArray)
	// remove hidden classs
	//form.classList.remove("dietary-form");
	
	//Assign each elements to variables
	img.src = recipesArray.thumbnail_url;
	img.alt = recipesArray.name;
	receipe.textContent = "Recipe";
	receipeName.textContent = recipesArray.name;
	eachIngredient.textContent = "Ingredients";
	eachIngredient.textContent = "Ingredients are blaaaaaaa"; //where are the ingredients
	instructions.textContent = "Instructions";
	//loop through instructions
	// for (let i = 0; i < recipesArray.instructions.length; i++) {
    //     instructionsName.textContent = recipesArray.instructions[i].display_text
    // }
    // //loop through ingredients
    // for (let i = 0; i < recipesArray.ingredients.length; i++) {
    //     ingredient.textContent = recipesArray.ingredients[i].text
    // }
	//ask Lantz is this what works? 

	instructionsName.textContent = recipesArray.instructions[0].display_text + 
	recipesArray.instructions[1].display_text + 
	recipesArray.instructions[2].display_text + 
	recipesArray.instructions[3].display_text

	//Append elements to container


	recipeContainer.appendChild(receipe)
	recipeContainer.appendChild(img)
	recipeContainer.appendChild(receipeName)

	ingredientsList.appendChild(eachIngredient);
	recipeContainer.appendChild(ingredientsList)
	recipeContainer.appendChild(eachIngredient)
	recipeContainer.appendChild(instructions)
	recipeContainer.appendChild(instructionsName)
	randomRecipeButton.textContent = "Random Recipe";
	recipeContainer.appendChild(randomRecipeButton)
}
function submitReview() {
	reviewForm.addEventListener('submit', function(e) {
		e.preventDefault();
		console.log(e.target)
	}); 
}
//After page loads
// checkboxes.forEach(function(checkbox) { //adding an event listener to each checkbox
// 	checkbox.addEventListener('change', function(e) {
// 		enabledDietary => { 
// 			Array.from(checkboxes) //converts checkboxes to an array to use filter and map
// 			.filter(i => i.checked) //Array.filter to removed unchecked checkboxes
// 			.map(i => i.value) // Array.map to extract only the checkbox values from the array
// }
//         if (e.target.value === "vegetarian") {
			
// 		})
// }) //we don't want prevent default do we? we want the page to refresh with the newly selected dietary choice


//Initializers
async function getRecipes() {
	try {
	  const response = await fetch(url, options);
	  const responseData = await response.json(); // Parse response as JSON
	  const recipesArray = responseData.results; // Extract the 'results' array from the response data
	renderRecipes(recipesArray);
	//displayRecipe(recipesArray)
	  console.log(recipesArray);
	} catch (error) {
	  console.error(error);
	}
  }  
  //getRecipes()


  //total_time_minutes, 
  //yields serviens size
  //video_url



