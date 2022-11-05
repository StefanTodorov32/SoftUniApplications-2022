const homeSection = document.querySelector('.home')
const url = 'http://localhost:3030/data/recipes'
const recipeList = homeSection.querySelector('.recipe-list')


export async function renderHome(){
    const response = await fetch(url)
    const data = await response.json()
    renderRecipes(Object.values(data))
    homeSection.style.display = 'block'
}
function renderRecipes(recipes){
    const fragment = document.createDocumentFragment()

    recipes.forEach(x => {
        fragment.appendChild(renderRecipe(x))
    });
    recipeList.innerHTML = ``
    recipeList.appendChild(fragment)
}
function renderRecipe(recipe){
    const recipeElement = document.createElement('article')
    recipeElement.classList.add('preview')
    recipeElement.innerHTML = `
        <div class ="title">
        <h2>${recipe.name}</h2>
        </div>
        <div class="small">
        <img src="${recipe.img}">
        </div>
    `
    return recipeElement
}