import '../../pages/index.css'
import '../components/validate.js'
import '../components/card.js'

/* cards */
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

/* buttons */
const btnPopupEdit = document.querySelector('#profile-button');
const btnPopupPlace = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('#popup-edit');
const popupPlace = document.querySelector('#popup-place');

/* forms */
const formElement = document.querySelector('.form')
const formEdit = document.querySelector('#form-edit');
const formPlace = document.querySelector('#form-place');
const loginInput = document.querySelector('input[name="login"]');
const aboutInput = document.querySelector('input[name="about"]');
const nameInput = document.querySelector('input[name="name"]');
const linkInput = document.querySelector('input[name="link"]');
const buttonSave = document.getElementById('form-edit-save');
const btnPlaceSave = document.getElementById('form-place-save');
const bigPhoto = document.querySelector('.popup__photo-big');
const formInput = formElement.querySelector('.form__input');
const btnClsPopupPlace = document.querySelector('#close-popupPlace');
const btnClsPopupPhoto = document.querySelector('#close-popupPhoto');
const btnClsPopupEdit = document.querySelector('#close-popupEdit');
const formClose = document.querySelector('.form__close');
const popup = document.querySelector('.popup');


/*function openPopup */

function openPopup(item) {
  item.classList.add('popup_active');
  document.addEventListener('keydown', closePopupOnEsc);
}

btnPopupPlace.addEventListener('click', function () {
  openPopup(popupPlace);
  nameInput.value = "";
  linkInput.value = "";
})


/* function closePopup */

function closePopup(item) {
  item.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupOnEsc);
}


/* function for edit information profile */

function editInfoProfile(evt) {
  evt.preventDefault();

  profileTitle.textContent = loginInput.value;
  profileSubtitle.textContent = aboutInput.value;

  closePopup(popupEdit);
}

btnPopupEdit.addEventListener('click', function () {
  openPopup(popupEdit);
})

btnClsPopupEdit.addEventListener('click', function () {
  closePopup(popupEdit);
})

formEdit.addEventListener('submit', editInfoProfile);

/* add new card */

function addNewCard(evt) {
  evt.preventDefault();

  const link = linkInput.value;
  const name = nameInput.value;

  const card = createCard({ link, name, alt: name });

  elements.prepend(card);

  closePopup(popupPlace);

  return;
}

formPlace.addEventListener('submit', addNewCard);

btnClsPopupPlace.addEventListener('click', function () {
  closePopup(popupPlace);
})

btnClsPopupPhoto.addEventListener('click', function () {
  closePopup(popupPhoto);
})


/* button 'Esc' function */

function closePopupOnEsc(event) {
  if (event.key === "Escape") {
    popup.classList.remove('popup_active');
  }
}

document.addEventListener('keydown', closePopupOnEsc);

/* close popup of push overlay */

function closePopupOnClick(event) {

  if (event.target === popup) {
    // Здесь вы можете закрыть popup
    // Например, удалить класс 'active' у элемента popup
    popup.classList.remove('popup_active');
  }
}

document.addEventListener('click', closePopupOnClick);