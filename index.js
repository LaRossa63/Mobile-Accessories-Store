const btn_burger = document.querySelector('.header__burger-btn');
const menu_mobile = document.querySelector('.header__mobile');

btn_burger.addEventListener('click', () => {
  menu_mobile.classList.toggle('header__hide');

  console.log('гуд');
});
