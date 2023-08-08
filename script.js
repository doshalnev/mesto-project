/* open popup window function */
const btnPopupEdit = document.querySelector('#profile-button');
const btnPopupPlace = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('#popup-edit');
const popupPlace = document.querySelector('#popup-place');


function openPopup() {
  btnPopupEdit.addEventListener('click', function () {
    popupEdit.classList.add('popup_active');
  })

  btnPopupPlace.addEventListener('click', function () {
    popupPlace.classList.add('popup_active');
  })
}

openPopup();


/* close popup window function */
const btnsClosePopup = document.querySelectorAll('.form__close');

function closePopup() {
  btnsClosePopup.forEach(function (btnClosePopup) {
    btnClosePopup.addEventListener('click', function () {
      popupEdit.classList.remove('popup_active');
      popupPlace.classList.remove('popup_active');
    })
  })
}

closePopup();


/* function for edit information profile */

const formEdit = document.querySelector('#form-edit');
const loginInput = document.querySelector('input[name="login"]');
const aboutInput = document.querySelector('input[name="about"]');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonSave = document.getElementById('form-edit-save');
const closeEdit = document.getElementById('form-edit-close');

function editInfoProfile(evt) {
  evt.preventDefault();

  profileTitle.textContent = loginInput.value;
  profileSubtitle.textContent = aboutInput.value;
  popupEdit.classList.remove('popup_active');
}

formEdit.addEventListener('submit', editInfoProfile);


/* add new card */

const btnClosePlace = document.querySelector('#form-close');
const formPlace = document.querySelector('#form-place');
const elements = document.querySelector('.elements');
let element = elements.querySelector('.element');
const nameInput = document.querySelector('input[name="name"]');
const linkInput = document.querySelector('input[name="link"]');
const btnPlaceSave = document.getElementById('form-place-save')

function addNewCard(evt) {
  evt.preventDefault();

  element = elements.querySelector('.element').cloneNode(true);

  element.querySelector('.element__photo').src = linkInput.value;
  element.querySelector('.element__title').textContent = nameInput.value;
  popupPlace.classList.remove('popup_active');

  elements.prepend(element);
}

formPlace.addEventListener('submit', addNewCard);


const initialCards = [
  {
    name: 'Егорьевск',
    link: 'https://kartinkin.net/pics/uploads/posts/2022-08/1660048041_5-kartinkin-net-p-yegorevsk-dostoprimechatelnosti-krasivo-fo-5.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/* add six cards with help NodeList */

const template = document.querySelector('#element-template').content;

for (let i = 0; i < initialCards.length; i += 1) {
  const element = template.querySelector('.element').cloneNode(true);
  const nameElement = initialCards[i].name;
  const linkElement = initialCards[i].link;

  element.querySelector('.element__title').textContent = nameElement;
  element.querySelector('.element__photo').src = linkElement;

  elements.prepend(element);
};


/* button 'Like' function */
const elementLikes = elements.querySelectorAll('.element__like');

elementLikes.forEach(function (elementLike) {
  elementLike.addEventListener('click', function () {
    elementLike.classList.toggle('element__like_active');
  })
})


/* button 'trash' function */
const btnsTrash = elements.querySelectorAll('.element__trash');

btnsTrash.forEach(function (btnTrash) {
  btnTrash.addEventListener('click', function () {
    btnTrash.parentNode.remove();
  })
})


/* image modal window setting */
const popupPhoto = document.querySelector('.popup-photo')
const btnsPhoto = elements.querySelectorAll('.element__photo');
const bigPhoto = document.querySelector(".popup-photo__big");
const captionText = document.querySelector(".popup-photo__caption");

btnsPhoto.forEach(function (btnPhoto) {
  btnPhoto.addEventListener('click', function () {
    popupPhoto.style.display = "block";
    bigPhoto.src = this.src;
  })
})


const btnClsPhotoPopup = document.getElementsByClassName("popup-photo__close")[0];
btnClsPhotoPopup.onclick = function () {
  popupPhoto.style.display = "none";
}

btnsPhoto.onclick = function () {
}





/*  errors   

После каждого добавления карточки нужно очищать поля формы, 
сейчас пользователю приходится делать это руками если требуется 
добавить более одной карточки.

События карточки - лайки, удаление, открытие окна - не работают для 
вновь добавленных карточек.

Кнопка закрытия окна не по макету http://joxi.ru/D2P1wOgh1glxlA

Если поменять данные пользователя, кнопка для открытия модального 
окна уменьшается http://joxi.ru/vAWgB7WuKNaDZA

*/
