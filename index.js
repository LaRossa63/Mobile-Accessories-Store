const btn_burger = document.querySelector('.header__image-burger');
const popup_mobile = document.querySelector('.header__popup-mobile');

const btn_catalog = document.querySelector('#popup__catalog-btn');
const popup_catalog_mobile = document.querySelector('.popup__mobile-catalog');

const btn_nav = document.querySelector('.header__nav');
const popup_catalog = document.querySelector('.header__nav-popup');

btn_burger.addEventListener('click', () => {
  popup_mobile.classList.toggle('popup_hide');
});

btn_catalog.addEventListener('click', () => {
  popup_catalog_mobile.classList.toggle('popup_hide');
});

btn_nav.addEventListener('click', () => {
  popup_catalog.classList.toggle('popup_hide');
});
