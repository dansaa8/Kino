export default function hamburger() {
  let hamburgerIcon = document.querySelector('#hamburger-icon');
  let mainNavShow = document.querySelector('.main-nav');
  hamburgerIcon.addEventListener('click', () => {
    if (hamburgerIcon.getAttribute('src') == '/public/hamburger-icon.svg') {
      hamburgerIcon.setAttribute('src', '/public/close-icon.svg');
      mainNavShow.classList.add('show');
    } else {
      hamburgerIcon.setAttribute('src', '/public/hamburger-icon.svg');
      mainNavShow.classList.remove('show');
    }
  });
}