/* setting modal window 'popup-edit' */

let popupEdit = document.querySelector('#popup-edit');
document.querySelector('#profile-button').onclick = function () {
  popupEdit.classList.add('popup_active');
}
document.querySelector('#form-edit-close').onclick = function () {
  popupEdit.classList.remove('popup_active');
}


/* setting modal window 'popup-place' */

let popupPlace = document.querySelector('#popup-place');
let buttonPlace = document.querySelector('.profile__add-button');
let closePlace = document.querySelector('#form-place-close');

buttonPlace.onclick = function () {
  popupPlace.classList.add('popup_active');
}

closePlace.onclick = function () {
  popupPlace.classList.remove('popup_active');
}


/* function for edit information profile */

let formEdit = document.querySelector('#form-edit');
let loginInput = document.querySelector('input[name="login"]');
let aboutInput = document.querySelector('input[name="about"]');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let buttonSave = document.querySelector('#form-save');
let closeEdit = document.querySelector('#form-edit-close');

function editInfoProfile(evt) {
  evt.preventDefault();

  profileTitle.textContent = loginInput.value;
  profileSubtitle.textContent = aboutInput.value;

  closeEdit.onclick();
}

formEdit.addEventListener('submit', editInfoProfile);


/* add new card */

let btnClosePlace = document.querySelector('#form-place-close');
let elements = document.querySelector('.elements');
let element = elements.querySelector('.element');
let nameInput = document.querySelector('input[name="name"]');
let linkInput = document.querySelector('input[name="link"]');
let btnPlaceSave = document.querySelector('#form-place-save').onclick = function (evt) {
  evt.preventDefault();

  element = elements.querySelector('.element').cloneNode(true);

  element.querySelector('.element__photo').src = linkInput.value;
  element.querySelector('.element__title').textContent = nameInput.value;

  elements.prepend(element);

  btnClosePlace.onclick();
}


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
  element = template.querySelector('.element').cloneNode(true);
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