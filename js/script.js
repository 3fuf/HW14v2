console.log("Test");

const button = document.querySelector('.btn-burger');
const navSite = document.querySelector('.nav-site');
const close = document.querySelector('.nav-site-btn_close');

button.addEventListener('click', () => {
    navSite.classList.toggle('nav-site--open');
});

close.addEventListener('click', () => {
    navSite.classList.remove('nav-site--open');
});

$('#slider').slick({
    dots: true,
});