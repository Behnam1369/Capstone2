const getComments = (idmeal) => {
  const appid = 'tLVd7tb0BQpHYLFSGTqK';
  const result = fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appid}/comments?item_id=${idmeal}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => `failed.${error}`);
  return result;
};

const getMealDetail = (idmeal) => {
  const result = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => `failed.${error}`);
  return result;
};

const showPopup = async (idmeal) => {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  const popup = document.createElement('div');
  popup.classList.add('popup');

  popupContainer.appendChild(popup);

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', () => {
    popupContainer.remove();
    document.querySelector('html').style.overflow = 'auto';
  });
  popup.appendChild(closeButton);

  document.querySelector('html').style.overflow = 'hidden';
  document.querySelector('body').appendChild(popupContainer);

  const mealDetail = await getMealDetail(idmeal);

  const img = document.createElement('img');
  img.src = mealDetail.meals[0].strMealThumb;
  popup.appendChild(img);

  const infoDiv = document.createElement('div');
  infoDiv.innerHTML = `
  <h2>${mealDetail.meals[0].strMeal}</h2>
  ${mealDetail.meals[0].strInstructions.split(/STEP [0-9] -/).map((el, i) => (i > 0 ? `<p>${i} - ${el}</p>` : '')).join('')}
  <div class="tags">${(mealDetail.meals[0].strTags || '').split(',').map((el) => `<div class='tag'>${el}</div>`)}</div>
  `;

  popup.appendChild(infoDiv);
  const comments = await getComments(idmeal);
  const commentsDiv = document.createElement('div');
  commentsDiv.style.width = '100%';
  commentsDiv.innerHTML = `
  <h3>Comments</h3>
  <div class="comments">${comments.map((el) => `<div class='comment'>
      <div class="user"> ${el.username} <span>${el.creation_date}</span> </div>
      <p class='instruction'>${el.comment}</p>
    </div>`)}</div>
  `;
  popup.appendChild(commentsDiv);
};

export default showPopup;