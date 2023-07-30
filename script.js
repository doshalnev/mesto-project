/* Connect button on and off popup */

var popup = document.getElementById('popup-edit');
var button = document.getElementById('profile__button');
var close = document.getElementsByClassName("form__close")[0];

button.onclick = function () {
  popup.classList.add("popup_active");
}

close.onclick = function () {
  popup.classList.remove("popup_active");
}


/* Edit name and info about self */

var form = document.querySelector('.form');
var nameInput = document.querySelector('input[name="login"');
var aboutInput = document.querySelector('input[name="about"');
var profileTitle = document.querySelector('.profile__title');
var profileSubtitle = document.querySelector('.profile__subtitle');

function handleFormSubmit(evt) {
  evt.preventDefault();
  console.log(nameInput.value);
  console.log(aboutInput.value);

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;

  close.onclick();
}

form.addEventListener('submit', handleFormSubmit);


/* create popup-place function */

var popupPlace = document.getElementById('popup-place');
var addButton = document.querySelector('.profile__add-button');
var closePlace = document.getElementsByClassName('form__close')[1];

addButton.onclick = function () {
  popupPlace.classList.add('popup_active');
}

closePlace.onclick = function () {
  popupPlace.classList.remove('popup_active');
}

console.log(closePlace);

/* Six cards from box */

/* Like 'active' for like button */

let elementLike = document.querySelector('.element__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like_active');
})
