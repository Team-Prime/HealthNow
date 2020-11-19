// MOBILE NAVIGATION MENU
const menuButton = document.querySelector('.menu_toggle');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const navList = document.querySelector('.nav__list');

menuButton.addEventListener('click', function () {
    navList.classList.toggle('active');
    open.classList.toggle('active');
    close.classList.toggle('active');
});