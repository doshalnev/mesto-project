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

var form = document.querySelector('form');
var nameInput = document.querySelector('input[name="login"]');
var aboutInput = document.querySelector('input[name="about"]');
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

/* create new element  */

var formPlace = document.querySelector('#form-place');
var namesInput = document.querySelector('input[name="names"]');
var linkInput = document.querySelector('input[name="link"]');
var elementTitle = document.querySelector('.element__title');
var elementPhoto = document.querySelector('.element__photo');

function handleFormSubmite(evt) {
  evt.preventDefault();
  console.log(namesInput.value);
  console.log(linkInput.value);

  elementTitle.textContent = namesInput.value;
  elementPhoto = linkInput.value;

  close.onclick();
}

formPlace.addEventListener('submit', handleFormSubmite);

/* Six cards from box */

const elTemplate = document.querySelector('#element-template').content;
const elements = document.querySelector('.elements');
var element = elTemplate.querySelector('.element').cloneNode(true);


element.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
element.querySelector('.element__title').textContent = 'Архыз';

elements.appendChild(element);

var element = elTemplate.querySelector('.element').cloneNode(true);

element.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
element.querySelector('.element__title').textContent = 'Челябинская область';

elements.appendChild(element);

var element = elTemplate.querySelector('.element').cloneNode(true);

element.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
element.querySelector('.element__title').textContent = 'Иваново';

elements.appendChild(element);

var element = elTemplate.querySelector('.element').cloneNode(true);

element.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
element.querySelector('.element__title').textContent = 'Камчатка';

elements.appendChild(element);

var element = elTemplate.querySelector('.element').cloneNode(true);

element.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
element.querySelector('.element__title').textContent = 'Холмогорский район';

elements.appendChild(element);

var element = elTemplate.querySelector('.element').cloneNode(true);

element.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';
element.querySelector('.element__title').textContent = 'Байкал';

elements.appendChild(element);

/* Like 'active' for like button */

const elementLike = document.querySelector('.element__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like_active');
})
