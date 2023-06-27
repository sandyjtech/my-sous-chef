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
const checkboxes = document.querySelectorAll('input[type=checkbox])') 

//select all checkboxes with the type=checkbox 

//Render Function

//Event Listeners

//need to change hover to an event listener vs in CSS
closedBook.addEventListener('click', openRecipe)//not sure if that's right?
