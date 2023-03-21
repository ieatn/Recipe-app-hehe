const randomMeal = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const data = await res.json()
    // console.log(data.meals[0].strMeal)
    return data
}

const createMeal = async () => {
    const newMeal = await randomMeal()
    const meal = document.querySelector('.meal')
    meal.innerHTML = 
    `
        <span class="badge">Random Recipe</span>
        <img src="${newMeal.meals[0].strMealThumb}" alt="">
        <div>
        <h1>${newMeal.meals[0].strMeal}</h1>
        <button id="favorite">Favorite</button>
        </div>
    `
    const favBtn = document.querySelector('#favorite')
    favBtn.addEventListener('click', () => favoriteMeal(newMeal))

}

const favoriteMeal = (newMeal) => {
    const fav = document.createElement('div')
    fav.innerHTML = 
    `
        <div class="favorites">
            <img src="${newMeal.meals[0].strMealThumb}" alt="">
            <p>${newMeal.meals[0].strMeal}</p>
        </div>
    `
    favoritesContainer.appendChild(fav)
}

const btn = document.querySelector('#btn')
const bottom = document.querySelector('.bottom')
const favoritesContainer = document.querySelector('.favorites-container')
btn.addEventListener('click', createMeal)