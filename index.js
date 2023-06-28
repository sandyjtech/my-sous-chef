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
const book = document.querySelector('.book')
const reviewForm = document.querySelector('#review-form')
//const checkboxes = document.querySelectorAll('input[type="checkbox"]') 

//Create Global Elements//create recipe container elements
	let img = document.createElement("img");
	img.setAttribute("id", "recipe-img");
	let receipe = document.createElement("h2");
	let receipeName = document.createElement("h3");
	let ingredientsList = document.createElement("ul");
	let instructions = document.createElement("h3")
	let instructionsName = document.createElement("p")
    let eachIngredient = document.createElement("li");
	let ingredient = document.createElement("h4");



//Event Listeners


book.addEventListener('click', function() {
	openBook();
	getRecipes();
})
book.addEventListener("mouseover", function() {
	book.style.transform = "scale(1.2)"
})//ADDED
book.addEventListener("mouseout", function() {
	book.style.transform = "scale(1)"
})//ADDED

//Render Function
function renderRecipes(recipesArray) {
	recipesArray.forEach(displayRecipe)
}
//Event Handlers
function openBook() {
    book.classList.add("open")
	//book.toggle("clicked")
  }

function displayRecipe(recipesArray) {			
	//Assign each elements to variables
	img.src = recipesArray.thumbnail_url;
	img.alt = recipesArray.name;
	receipe.textContent = "Recipe";
	receipeName.textContent = recipesArray.name;
	ingredientsList.textContent = "Ingredients";
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
	//.mapFilter random something
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
