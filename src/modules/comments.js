import commentsCount from './commentCount.js';

const appid = 'tLVd7tb0BQpHYLFSGTqK';

const getComments = (idmeal) => {
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
  const commentsDiv = document.createElement('div');
  commentsDiv.style.width = '100%';
  let comments = '';
  const txtUser = document.createElement('input');
  txtUser.classList.add('txtUser');
  txtUser.placeholder = 'Your name ';
  const txtComment = document.createElement('textarea');
  txtComment.classList.add('txtComment');
  txtComment.placeholder = 'Your comment';
  const btnSubmitComment = document.createElement('button');
  btnSubmitComment.innerHTML = 'Submit your comment';
  const message = document.createElement('p');
  message.classList.add('message');

  const showComments = () => {
    let res = `<h2>Comments (${commentsCount(comments)})</h2>`;
    if (comments.length > 0) {
      res += ` 
  <div class="comments">${comments.map((el) => `<div class='comment'>
      <div class="user"> ${el.username} <span>${el.creation_date}</span> </div>
      <p>${el.comment}</p>
    </div>`).join('')}</div>
  `;
    }
    return res;
  };

  const submitComment = (idmeal) => {
    if (txtUser.value === '') {
      message.innerHTML = '';
      setTimeout(() => {
        message.classList.add('failed');
        message.innerHTML = 'Please enter you name';
      }, 100);
      return false;
    } if (txtComment.value === '') {
      message.innerHTML = '';
      setTimeout(() => {
        message.classList.add('failed');
        message.innerHTML = 'Please enter you comment';
      }, 100);
      return false;
    }

    const data = JSON.stringify({
      item_id: idmeal,
      username: txtUser.value,
      comment: txtComment.value,
    });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    message.innerHTML = '';
    btnSubmitComment.disabled = true;
    btnSubmitComment.innerHTML = 'Submitting ... ';
    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appid}/comments`, requestOptions)
      .then((response) => response.text())
      .then(async (result) => {
        if (result === 'Created') {
          message.classList.add('success');
          message.innerHTML = 'Your comment was saved suseccfully.';
          comments = await getComments(idmeal);
          commentsDiv.innerHTML = showComments();
        } else {
          message.classList.add('failed');
          message.innerHTML = 'An error accured. Please try again later';
        }
      }).finally(() => {
        txtUser.value = '';
        txtComment.value = '';
        btnSubmitComment.disabled = false;
        btnSubmitComment.innerHTML = 'Submit your comment';
      });

    return null;
  };

  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  const popup = document.createElement('div');
  popup.classList.add('popup');

  popupContainer.appendChild(popup);

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', () => {
    popupContainer.remove();
    btnSubmitComment.removeEventListener('click', () => submitComment(idmeal));
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
  ${mealDetail.meals[0].strInstructions.split(/STEP [0-9] -/).map((el, i) => (i > 0 ? `<p class='instruction'>${i} - ${el}</p>` : '')).join('')}
  <div class="tags">${(mealDetail.meals[0].strTags || '').split(',').map((el) => (el !== '' ? `<div class='tag'>${el}</div>` : '')).join('')}</div>
  `;
  popup.appendChild(infoDiv);

  comments = await getComments(idmeal);
  commentsDiv.innerHTML = showComments();

  popup.appendChild(commentsDiv);

  const submitCommentTitle = document.createElement('h2');
  submitCommentTitle.innerHTML = 'Add your comment';
  popup.append(submitCommentTitle);
  popup.appendChild(txtUser);
  popup.appendChild(txtComment);
  popup.appendChild(btnSubmitComment);
  btnSubmitComment.addEventListener('click', () => submitComment(idmeal));
  popup.appendChild(message);
};

export default showPopup;