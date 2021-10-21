const menuImg = document.getElementById('menu__img');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu__close');
const arrowPrevious = document.querySelector('.arrow__left')
const arrowNext = document.querySelector('.arrow__right')

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

arrowPrevious.addEventListener('click',(e)=>{
	console.log(e.target)
})
arrowNext.addEventListener('click',(e)=>{
	console.log(e.target)
})