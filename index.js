//Fetch Request and Function
const url =
  "https://tasty.p.rapidapi.com/recipes/list?from=0&size=10000&tags=dinner";
let recipe = [];
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bd23b1e9demsh0080b8f130a2663p13493ajsnb15e39575b85",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

//DOM Elements
const container = document.getElementById("container");
const recipeContainer = document.getElementById("recipe-container");
const book = document.querySelector(".book");
const reviewForm = document.querySelector("#review-form");

//Create Global Elements//create recipe container elements
let img = document.createElement("img");
img.setAttribute("id", "recipe-img");
let receipe = document.createElement("h2");
let receipeName = document.createElement("h3");
receipeName.setAttribute("id", "recipe-name");
let ingredientsList = document.createElement("ul");
let instructions = document.createElement("h4");
let instructionsName = document.createElement("p");
let instructionContainer = document.createElement("ol");
instructionContainer.setAttribute("id", "instruction-container");
let randomRecipeButton = document.createElement("button");
randomRecipeButton.setAttribute("id", "random-button");
let reviewDiv = document.querySelector("#review-container");
let starSpan = document.querySelectorAll(".fa")
const recipeVideo = document.createElement("video");
const recipeVideoSrc = document.createElement("source")
recipeVideo.setAttribute("id", "video");

//Event Listeners
book.addEventListener("click", function () {
  openBook();
  getRecipes();
});
book.addEventListener("mouseover", function () {
  book.style.transform = "scale(1.2)";
});
book.addEventListener("mouseout", function () {
  book.style.transform = "scale(1)";
});
book.addEventListener("click", getRecipes);

// Render Function
function renderRecipes(recipesArray) {
  recipe = recipesArray; // Assign the recipesArray to the global recipe variable
  recipesArray.forEach(displayRecipe);
}
//Event Handlers
function openBook() {
  book.classList.add("open");
}
function displayRecipe(recipe) {
  reviewForm.classList.remove("hidden");  
 
  ingredientsList.textContent = "Ingredients";
  recipe.sections[0].components.forEach((component) => {
	let eachIngredient = document.createElement("li");
    eachIngredient.textContent = component.raw_text;
	ingredientsList.appendChild(eachIngredient);  
  });
  //Assign each elements to variables
  img.src = recipe.thumbnail_url;
  img.alt = recipe.name;
  receipe.textContent = recipe.name;
 
  instructions.textContent = "Instructions";
  instructionContainer.innerHTML = ""; // Clear previous instructions
  
  recipe.instructions.forEach((instruction) => {
	let eachInstruction = document.createElement("li");
	eachInstruction.textContent = instruction.display_text;
	instructionContainer.appendChild(eachInstruction);
  });  
  recipeVideo.controls = true;
  recipeVideo.muted = false;
  recipeVideo.height = 240;
  recipeVideo.width = 320
  recipeVideoSrc.src = recipe.video_url;
  recipeVideo.appendChild(recipeVideoSrc)
  console.log(recipeVideoSrc.src)
  
  //Append elements to container
  recipeContainer.appendChild(receipe);
  recipeContainer.appendChild(img);
  recipeContainer.appendChild(receipeName);

  instructionContainer.appendChild(instructionsName);
  recipeContainer.appendChild(ingredientsList);
  recipeContainer.appendChild(instructionContainer);
  randomRecipeButton.textContent = "Random Recipe";
  recipeContainer.appendChild(randomRecipeButton);
  return (randomIndex = Math.floor(Math.random() * recipe.length));
}
randomRecipeButton.addEventListener("click", generateRandomRecipe);

function generateRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipe.length);
  const randomRecipe = recipe[randomIndex];
  displayRecipe(randomRecipe);
}

function submitReview() {
  reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = event.target.name.value;
    const newReview = event.target.review.value;
    //Create Review Section
    let reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");
    let reviewName = document.createElement("h3");
    let review = document.createElement("h5");
    reviewName.innerText = name;
    review.innerText = newReview;
    reviewCard.appendChild(reviewName);
    reviewCard.append(review);
    reviewDiv.append(reviewCard);
	
    //	console.log(`name: ${name}, review: ${newReview}`)
    reviewForm.reset();
  });


  //add starts to reviews
starSpan.forEach((star) => {
	star.addEventListener("click", function () {
        star.classList.add("checked");
		console.log(star.classList.contains("checked"));
	});
		if (star.classList.contains("checked")){
			let reviewStar = document.createElement("i");
			reviewStar.classList.add("fa");
			reviewStar.classList.add("fa-star");
			reviewStar.classList.add("checked");
			reviewDiv.appendChild(reviewStar);
		
		}

});
}

//Initializers
async function getRecipes() {
  try {
    const response = await fetch(url, options);
    const responseData = await response.json(); // Parse response as JSON
    const recipesArray = responseData.results;
    // Extract the 'results' array from the response data

    renderRecipes(recipesArray);
  } catch (error) {
    console.error(error);
  }
}
submitReview();

//total_time_minutes,
//yields servings size
//video_url


