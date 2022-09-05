const openMobileMenu = document.querySelector('.open-menu-button');
const mobileMenu = document.querySelector('.navigation')
const closeMenu = document.querySelector('.close-mobile-menu')


openMobileMenu.addEventListener("click", openMenu);
function openMenu() {
  mobileMenu.classList.add('is-open');
};

closeMenu.addEventListener('click', onCloseMenu);
function onCloseMenu() {
  mobileMenu.classList.remove('is-open');
}
