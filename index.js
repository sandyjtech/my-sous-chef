//Fetch Request and Function
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

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
    let reviewDiv = document.querySelector("#review-container")


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
})
book.addEventListener('click', getRecipes)

//Render Function
function renderRecipes(recipesArray) {
	recipesArray.forEach(displayRecipe)
}
//Event Handlers
function openBook() {
    book.classList.add("open")	
  }
function displayRecipe(recipe) {			
	 // Select a random recipe
	 //let randomRecipe = recipe[Math.floor(Math.random() * recipe.length)];
	//Assign each elements to variables
	img.src = recipe.thumbnail_url;
    img.alt = recipe.name;    
    receipeName.textContent = recipe.name;
	ingredientsList.textContent = "Ingredients";
	eachIngredient.textContent = "Ingredients are blaaaaaaa"; //where are the ingredients
	instructions.textContent = "Instructions";
	
	//loop through instructions
	// for (let i = 0; i < recipe.instructions.length; i++) {
    //     instructionsName.textContent = recipe.instructions[i].display_text
    // }
    // //loop through ingredients
    // for (let i = 0; i < recipe.ingredients.length; i++) {
    //     ingredient.textContent = recipe.ingredients[i].text
    // }
	//ask Lantz is this what works? 

	instructionsName.textContent = recipe.instructions[0].display_text + 
	recipe.instructions[1].display_text + 
	recipe.instructions[2].display_text + 
	recipe.instructions[3].display_text

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
	reviewForm.addEventListener("submit", function (event) {
		event.preventDefault();			
	const name = event.target.name.value;
	const newReview = event.target.review.value;
		//Create Review Section		
		let reviewName = document.createElement("h3");
		let review = document.createElement("p");
        reviewName.innerText = name;
        review.innerText = newReview;
		reviewDiv.append(reviewName);
		reviewDiv.append(review);
		console.log(`name: ${name}, review: ${newReview}`)
	}); 
}

//Initializers
async function getRecipes() {
	try {
	  const response = await fetch(url, options);
	  const responseData = await response.json(); // Parse response as JSON
	  const recipesArray = responseData.results; // Extract the 'results' array from the response data
	renderRecipes(recipesArray);	
	} catch (error) {
	  console.error(error);
	}
  }  
  submitReview();


  //total_time_minutes, 
  //yields servings size
  //video_url




