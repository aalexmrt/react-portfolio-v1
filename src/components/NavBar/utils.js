const menuToggle = document.querySelector('.menu-toggle')
if (menuToggle) {
  menuToggle.addEventListener('click', toggleResponsiveMenu)
}
//

function toggleResponsiveMenu() {
  const nav = document.querySelector('.nav')
  nav.classList.toggle('mobile-nav')
  menuToggle.classList.toggle('is-active')
}
