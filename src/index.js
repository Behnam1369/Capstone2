import './style.css';
import Logo from './images/logo.jpg';
import './index.css';

const logo = document.querySelector('footer .logo');
logo.src = Logo;

const displayList = document.querySelector('.display-list');

async function loadMeals() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese');
  const data = await response.json();

  const theMeals = data.meals;

  for (let i = 0; i < theMeals.length; i++) {
    const divItem = document.createElement('div');
    divItem.classList.add('item');
    divItem.innerHTML = `
        <img src="${theMeals[i].strMealThumb}" alt="">
        <div class="flex-container">
            <h1 class="title">${theMeals[i].strMeal}</h1>
            <p class="likes"><span class="heart">&#10084;</span> 5 likes</p>
        </div>
        <p class="item-data">
            <a class="comment" href="">Comment</a>
            <a class="reserve" href="">Reservation</a>
        </p>
        `;
    displayList.appendChild(divItem);
  }
}

window.addEventListener('load', () => {
  loadMeals();
});
