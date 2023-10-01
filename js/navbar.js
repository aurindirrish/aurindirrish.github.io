const navbarIcon = document.querySelector('.navbar-burger');
const navmenu = document.getElementById('navmenu-narrow');

navbarIcon.addEventListener('click', () => {
    navmenu.classList.toggle('hidden');
});