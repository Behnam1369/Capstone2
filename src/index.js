import './style.css';
import Logo from './images/logo.jpg';
import './index.css';
import getMeals from './modules/meals.js';

const logo = document.querySelector('footer .logo');
logo.src = Logo;

async function loadMeals() {
  const meals = await getMeals();
  console.log(meals);
}

window.addEventListener('load', () => {
  loadMeals();
});
