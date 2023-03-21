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
}

const btn = document.querySelector('#btn')
const bottom = document.querySelector('.bottom')
btn.addEventListener('click', createMeal)