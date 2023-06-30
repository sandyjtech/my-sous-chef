// Fetch Request and Function
const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=10000&tags=dinner";
let recipe = [];
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8f4c3be0fbmshe92b0c564a302bcp104e3cjsn4c7ba0e04cdc",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

// DOM Elements
const container = document.getElementById("container");
const recipeContainer = document.getElementById("recipe-container");
const book = document.querySelector(".book");
const reviewForm = document.querySelector("#review-form");

// Create Global Elements
let img = document.createElement("img");
img.setAttribute("id", "recipe-img");
let recipeTitle = document.createElement("h2");
let recipeName = document.createElement("h3");
recipeName.setAttribute("id", "recipe-name");
let ingredientsList = document.createElement("ul");
let instructions = document.createElement("h4");
let instructionsName = document.createElement("p");
let instructionContainer = document.createElement("ol");
instructionContainer.setAttribute("id", "instruction-container");
let randomRecipeButton = document.createElement("button");
randomRecipeButton.setAttribute("id", "random-button");
randomRecipeButton.textContent = "Another Recipe";
let reviewDiv = document.querySelector("#review-container");
let starSpans = document.querySelectorAll(".fa");
let recipeVideo = document.querySelector("#recipe-video");

// Event Listeners
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
randomRecipeButton.addEventListener("click", generateRandomRecipe);

// Render Function
function renderRecipes(recipesArray) {
  recipe = recipesArray; // Assign the recipesArray to the global recipe variable
  recipesArray.forEach(displayRecipe);
}

// Event Handlers
function openBook() {
  book.classList.add("open");
}

function displayRecipe(recipe) {
  reviewForm.classList.remove("hidden");
  recipeVideo.classList.remove("hidden");
  ingredientsList.textContent = "Ingredients";

  recipe.sections[0].components.forEach((component) => {
    let eachIngredient = document.createElement("li");
    eachIngredient.textContent = component.raw_text;
    ingredientsList.appendChild(eachIngredient);
  });

  img.src = recipe.thumbnail_url;
  img.alt = recipe.name;
  recipeTitle.textContent = recipe.name;
  recipeVideo.src = recipe.original_video_url;
  instructions.textContent = "Instructions";
  instructionContainer.innerHTML = "";

  recipe.instructions.forEach((instruction) => {
    let eachInstruction = document.createElement("li");
    eachInstruction.textContent = instruction.display_text;
    instructionContainer.appendChild(eachInstruction);
  });

  // Append elements to container
  recipeContainer.appendChild(recipeTitle);
  recipeContainer.appendChild(img);
  recipeContainer.appendChild(recipeName);
  instructionContainer.appendChild(instructionsName);
  recipeContainer.appendChild(ingredientsList);
  recipeContainer.appendChild(instructionContainer);
  recipeContainer.appendChild(randomRecipeButton);

  return (randomIndex = Math.floor(Math.random() * recipe.length));
}

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

    // Create Review Section
    let reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");
    let reviewName = document.createElement("h3");
    let review = document.createElement("h5");
    reviewName.innerText = name;
    review.innerText = newReview;
    reviewCard.appendChild(reviewName);
    reviewCard.append(review);
    reviewDiv.append(reviewCard);

    reviewForm.reset();
  });

  // Add stars to reviews
  starSpans.forEach((star) => {
    star.addEventListener("click", function () {
      star.classList.add("checked");
      console.log(star.classList.contains("checked"));
    });

    if (star.classList.contains("checked")) {
      let reviewStar = document.createElement("i");
      reviewStar.classList.add("fa");
      reviewStar.classList.add("fa-star");
      reviewStar.classList.add("checked");
      reviewDiv.appendChild(reviewStar);
    }
  });
}

// Initializers
async function getRecipes() {
  try {
    const response = await fetch(url, options);
    const responseData = await response.json();
    const recipesArray = responseData.results;

    renderRecipes(recipesArray);
  } catch (error) {
    console.error(error);
  }
}

submitReview();

// total_time_minutes,
// yields servings size
