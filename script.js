const initialCards = [
  {
    name: 'Егорьевск',
    alt: 'Институт Станкин',
    link: 'https://kartinkin.net/pics/uploads/posts/2022-08/1660048041_5-kartinkin-net-p-yegorevsk-dostoprimechatelnosti-krasivo-fo-5.jpg'
  },
  {
    name: 'Челябинская область',
    alt: 'Река в Челябинской области',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    alt: 'Многоэтажки',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    alt: 'Земли Камчатки',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    alt: 'Железная дорога в лесу',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    alt: 'Скалы озера "Байкал"',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elements = document.querySelector('.elements')
const btnPopupEdit = document.querySelector('#profile-button');
const btnPopupPlace = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('#popup-edit');
const popupPlace = document.querySelector('#popup-place');
const btnsClosePopup = document.querySelectorAll('.form__close');

const formEdit = document.querySelector('#form-edit');
const loginInput = document.querySelector('input[name="login"]');
const aboutInput = document.querySelector('input[name="about"]');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonSave = document.getElementById('form-edit-save');

const formPlace = document.querySelector('#form-place');
const nameInput = document.querySelector('input[name="name"]');
const linkInput = document.querySelector('input[name="link"]');
const btnPlaceSave = document.getElementById('form-place-save');
let element = elements.querySelector('.element');
/*function openPopup */

function openPopup(popupEdit) {
  popupEdit.classList.add('popup_active');
}

function openPopup(popupPlace) {
  popupPlace.classList.add('popup_active');
  console.log('EATK ГА');
  console.log('https://eatkga.ru/wp-content/uploads/2019/03/45_big.jpg');
}

btnPopupEdit.addEventListener('click', function () {
  openPopup(popupEdit);
})

btnPopupPlace.addEventListener('click', function () {
  openPopup(popupPlace);
})


/* function closePopup */

function closePopup(popupEdit) {
  popupEdit.classList.remove('popup_active');
}

function closePopup(popupPlace) {
  popupPlace.classList.remove('popup_active');
}

function closePopup(popupPhoto) {
  popupPhoto.classList.remove('popup_active')
}

btnsClosePopup.forEach(function (btnClosePopup) {
  btnClosePopup.addEventListener('click', function () {
    closePopup(popupEdit);
    closePopup(popupPlace);
    closePopup(popupPhoto);
  })
})


/* function for edit information profile */

function editInfoProfile(evt) {
  evt.preventDefault();

  profileTitle.textContent = loginInput.value;
  profileSubtitle.textContent = aboutInput.value;

  closePopup(popupEdit);
}

formEdit.addEventListener('submit', editInfoProfile);


/* add six cards with help NodeList */

const template = document.querySelector('#element-template').content;

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    alt: item.alt,
    link: item.link
  };
});

function createCard() {
  placeInfo.forEach(renderCard);

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
}

function renderCard({ name, alt, link }) {
  const element = template
    .querySelector('.element')
    .cloneNode(true);
  element.querySelector('.element__title').textContent = name;
  element.querySelector('.element__photo').src = link;
  element.querySelector('.element__photo').setAttribute('alt', alt);

  elements.prepend(element);
}

createCard();


/* image modal window setting */
const popupPhoto = document.querySelector('#popup-photo')
const btnsPhoto = elements.querySelectorAll('.element__photo');
const bigPhoto = document.querySelector('.popup__photo-big');
const captionText = document.querySelector('.popup__photo-caption');

btnsPhoto.forEach(function (btnPhoto) {
  btnPhoto.addEventListener('click', function () {
    popupPhoto.classList.add('popup_active')
    bigPhoto.src = this.src;
  })
})


/* add new card */

function addNewCard(evt) {
  evt.preventDefault();

  element = elements.querySelector('.element').cloneNode(true);

  element.querySelector('.element__photo').src = linkInput.value;
  element.querySelector('.element__title').textContent = nameInput.value;
  element.querySelector('.element__photo').setAttribute('alt', nameInput.value);

  closePopup(popupPlace);

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

  elements.prepend(element);
}

formPlace.addEventListener('submit', addNewCard);
