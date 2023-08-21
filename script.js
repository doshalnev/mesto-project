/* cards */
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const template = document.querySelector('#element-template').content;
const elements = document.querySelector('.elements')
let element = elements.querySelector('.element');
/* buttons */
const btnPopupEdit = document.querySelector('#profile-button');
const btnPopupPlace = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('#popup-edit');
const popupPlace = document.querySelector('#popup-place');
const popupPhoto = document.querySelector('#popup-photo');
const popupPhotoCaption = document.querySelector('#caption');
const btnClsPopupEdit = document.querySelector('#close-popupEdit');
const btnClsPopupPlace = document.querySelector('#close-popupPlace');
const btnClsPopupPhoto = document.querySelector('#close-popupPhoto');
/* forms */
const formEdit = document.querySelector('#form-edit');
const formPlace = document.querySelector('#form-place');
const loginInput = document.querySelector('input[name="login"]');
const aboutInput = document.querySelector('input[name="about"]');
const nameInput = document.querySelector('input[name="name"]');
const linkInput = document.querySelector('input[name="link"]');
const buttonSave = document.getElementById('form-edit-save');
const btnPlaceSave = document.getElementById('form-place-save');
const bigPhoto = document.querySelector('.popup__photo-big');



/*function openPopup */

function openPopup(item) {
  item.classList.add('popup_active');
}

btnPopupPlace.addEventListener('click', function () {
  openPopup(popupPlace);
  nameInput.value = "";
  linkInput.value = "";
})


/* function closePopup */

function closePopup(item) {
  item.classList.remove('popup_active');
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


/* add six cards */

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

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    alt: item.alt,
    link: item.link
  };
});

function render() {
  placeInfo.forEach(function (placeInfo) {
    const card = createCard(placeInfo);
    renderCard(card);
  })
};

function createCard({ name, link, alt }) {
  const card = template.querySelector(".element").cloneNode(true);

  const elementLike = card.querySelector('.element__like');
  const btnTrash = card.querySelector('.element__trash');
  const btnPopupPhoto = card.querySelector('.element__photo');

  card.querySelector('.element__title').textContent = name;
  card.querySelector('.element__photo').src = link;
  card.querySelector('.element__photo').setAttribute('alt', alt);


  elementLike.addEventListener('click', function () {
    elementLike.classList.toggle('element__like_active');
  })

  btnTrash.addEventListener('click', function () {
    btnTrash.parentNode.remove();
  })

  btnPopupPhoto.addEventListener('click', function () {
    openPopup(popupPhoto);
    popupPhoto.classList.add('popup_photo-opacity');
    bigPhoto.src = this.src;
    bigPhoto.alt = this.alt;

    popupPhotoCaption.textContent = name;
  })

  return card;
}

function renderCard(card) {
  elements.prepend(card);
}

render();


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
