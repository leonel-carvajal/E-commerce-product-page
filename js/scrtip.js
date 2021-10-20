const menuImg = document.getElementById('menu__img');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu__close')

menuImg.addEventListener('click', () => {
	if (!menu.classList.contains('menu--active')) {
		menu.classList.add('menu--active');
	}
});
menuClose.addEventListener('click', () => {
	if (menu.classList.contains('menu--active')) {
		menu.classList.remove('menu--active');
	}
});