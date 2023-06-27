const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a58208e046msh288483c76743a1ap173c12jsn1afe1d9ae3b0',
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
//getRecipes()
