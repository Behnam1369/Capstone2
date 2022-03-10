import './style.css';
import Logo from './assets/logo.png';
import './index.css';
import getMeals from './modules/meals.js';
import showPopup from './modules/comments.js';
import { getLikes } from './modules/like.js';

const logo = document.querySelector('footer .logo');
logo.src = Logo;

const displayList = document.querySelector('.display-list');

async function loadMeals() {
  const data = await getMeals();
  const theMeals = data.meals;

  for (let i = 0; i < theMeals.length; i++) {
    const divItem = document.createElement('div');
    divItem.classList.add('item');
    divItem.innerHTML = `
        <img src="${theMeals[i].strMealThumb}" alt="">
        <div class="flex-container">
            <h1 class="title">${theMeals[i].strMeal}</h1>
            <div class="likes-div">
              <button class="icon" type="button" title="Press to like this food">&#10084;</button>
              <p class="likes" id="${theMeals[i].idMeal}"></p>Likes
            </div>            
        </div>
        <p class="item-data">
            <a class="comment" href="">Comment</a>
            <a class="reserve" href="">Reservation</a>
        </p>
        `;
    const btnComment = divItem.querySelector('.comment');
    btnComment.addEventListener('click', (e) => {
      e.preventDefault();
      showPopup(theMeals[i].idMeal);
    });
    displayList.appendChild(divItem);
  }

  getLikes().then((response) => {
    const likes = document.querySelectorAll('.likes');
    for (let i = 0; i < response.length; i++) {
      likes[i].textContent = `
        ${response[i].likes}
      `;
    }
  });
}

window.addEventListener('load', () => {
  loadMeals();
});
