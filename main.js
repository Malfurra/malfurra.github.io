AOS.init();
const listMenu = document.getElementById('list-menu')
const menuIcon = document.getElementById('menu-icon')

menuIcon.addEventListener('click', () => {
  listMenu.classList.toggle('block')
}
)