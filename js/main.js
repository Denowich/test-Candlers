

const menuBtn = document.querySelector('.menu__btn');
const menuMenu = document.querySelector('.menu__list-header');

menuBtn.addEventListener('click', ()=> {
    menuMenu.classList.toggle('menu--open');
});