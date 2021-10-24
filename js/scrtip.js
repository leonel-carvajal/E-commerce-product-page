const menuImg = document.getElementById('menu__img');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu__close');
const arrowPrevious = document.querySelector('.arrow__left');
const arrowNext = document.querySelector('.arrow__right');
const cart = document.getElementById('cart');
const basketModal = document.querySelector('.basket__modal');
const boxCart = document.querySelector('.box__cart');
const imgLightBox = document.querySelector('.lightbox__img')
const imagesThumbnail = document.querySelectorAll('.img__thumbanil')

let index = 0
const arrayImages = [
  'image-product-1.jpg',
	'image-product-2.jpg',
	'image-product-3.jpg',
	'image-product-4.jpg',
];

const initialImage = ()=>{	
	imgLightBox.src =`images/${arrayImages[index]}`
}



const ChangeImage = (arrow) => {
  if (arrow === 'back') {
    index--;
    if (index < 0) {
      index = arrayImages.length - 1;
    }
    //miniatures[index].classList.add("miniatures__img--active");
    initialImage();
  } else if (arrow === 'forward') {
    index++;
    if (index >= arrayImages.length) {
      index = 0;
    }
    //miniatures[index].classList.add("miniatures__img--active");
    initialImage();
    
  }
};
const activeImg = (e)=>{
  imagesThumbnail.forEach(img=>{
    if(img.classList.contains('img__thumbnail--active')){
      img.classList.remove('img__thumbnail--active')
    }
  })
  e.target.classList.add('img__thumbnail--active')
}

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

arrowPrevious.addEventListener('click', (e) => {
  ChangeImage('back')
});

arrowNext.addEventListener('click', (e) => {
	ChangeImage('forward')
});

cart.addEventListener('click', () => {
	basketModal.classList.toggle('basket__modal--active');
});

boxCart.addEventListener('click', () => {
	basketModal.classList.toggle('basket__modal--active');
});

imagesThumbnail.forEach(img=>{
  img.addEventListener('click',(e)=>{
    activeImg(e)
  })
})

window.addEventListener('DOMContentLoaded',initialImage)