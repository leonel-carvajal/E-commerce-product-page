const cart = document.getElementById('cart');
const menuImg = document.getElementById('menu__img');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu__close');
const pickerMinus = document.getElementById('picker__minus');
const pickerPlus = document.getElementById('picker__plus');
const addToCart = document.getElementById('addCart');
const arrowPreviousModal = document.querySelector('.far-left');
const arrowNextModal = document.querySelector('.far-right');
const basketModal = document.querySelector('.basket__modal');
const boxCart = document.querySelector('.box__cart');
const imgLightBox = document.querySelector('.lightbox__img');
const modalImg = document.querySelector('.modal__img');
const lightboxModal = document.querySelector('.lightbox__modal');
const imagesThumbnail = document.querySelectorAll('.img__thumbanil');
const imagesThumbnailModal = document.querySelectorAll('.img__thumbanilModal');
const modalIconClose = document.querySelector('.modal__close');
const pickerNumber = document.querySelector('.picker__number');
const basketContent = document.querySelector('.basket__content');
const amountBasketNumber = document.querySelector('.cart__added');

let index = 0;
let indexModal = 0;
let countBasketNumber = 0;
let arrayAmount = []

const arrayImages = [
	'image-product-1.jpg',
	'image-product-2.jpg',
	'image-product-3.jpg',
	'image-product-4.jpg',
];

const initialImage = (index) => {
	imgLightBox.src = `images/${arrayImages[index]}`;
};
const initialImageModal = (index) => {
	modalImg.src = `images/${arrayImages[index]}`;
};

const contentBasketEmpty = () => {
	const titleEmpty = document.createElement('h2');
	titleEmpty.classList.add('basket__empty');
	titleEmpty.textContent = 'Your cart is empty';
	basketContent.appendChild(titleEmpty);
};
const contentBasketFill = () => {
	let total = 0;
	let sum = arrayAmount.reduce((acc,item)=>acc+item,0)
	const fragment = document.createDocumentFragment();
	const divProduct = document.createElement('div');
	const imgProduct = document.createElement('img');
	const divDescription = document.createElement('div');
	const descriptionName = document.createElement('p');
	const descriptionPrices = document.createElement('p');
	const descriptionPrice = document.createElement('span');
	const descriptionNumber = document.createElement('span');
	const descriptionTotal = document.createElement('span');
	const iconDelete = document.createElement('img');
	const buttonBasket = document.createElement('button');

	divProduct.classList.add('product');
	imgProduct.src = `images/image-product-1-thumbnail.jpg`;
	imgProduct.alt = `image-product-1-thumbnail`;
	imgProduct.classList.add('basket__thumbails');
	iconDelete.src = `images/icon-delete.svg`;
	iconDelete.alt = 'icon-delete';
	iconDelete.classList.add('baske__delete');
	divDescription.classList.add('description');
	descriptionName.textContent = 'Autum limited edition';
	descriptionName.classList.add('description__name');
	descriptionPrices.classList.add('description__prices');
	buttonBasket.classList.add('button');
	descriptionPrice.classList.add('description__price');
	descriptionNumber.classList.add('description__number');
	descriptionTotal.classList.add('description__total');
	descriptionPrice.textContent = `$125.00`;
	descriptionNumber.textContent = `${sum}`;
	total = 125 * sum;
	descriptionTotal.textContent = `$${total}.00`;
	buttonBasket.textContent = 'CheckOut';

	divProduct.appendChild(imgProduct);
	divProduct.appendChild(divDescription);
	divProduct.appendChild(iconDelete);
	divDescription.appendChild(descriptionName);
	divDescription.appendChild(descriptionPrices);
	descriptionPrices.appendChild(descriptionPrice);
	descriptionPrices.appendChild(descriptionNumber);
	descriptionPrices.appendChild(descriptionTotal);
	fragment.appendChild(divProduct);
	basketContent.appendChild(fragment);
	basketContent.appendChild(buttonBasket);

	iconDelete.addEventListener('click', () => {
		basketContent.textContent = '';
		amountBasketNumber.textContent = 0;
		arrayAmount = []
		contentBasketEmpty();
	});
};



const activeImg = (e) => {
	imgLightBox.classList.add('lightbox__img--animation');
	initialImage(Number(e.target.dataset.index));
	imagesThumbnail.forEach((img) => {
		if (img.classList.contains('img__thumbnail--active')) {
			img.classList.remove('img__thumbnail--active');
		}
	});
	e.target.classList.add('img__thumbnail--active');
};

const activeImgModal = (e) => {
	modalImg.classList.add('lightbox__img--animation');
	initialImageModal(Number(e.target.dataset.index));
	imagesThumbnailModal.forEach((img) => {
		if (img.classList.contains('img__thumbnail--activeModal')) {
			img.classList.remove('img__thumbnail--activeModal');
		}
	});
	e.target.classList.add('img__thumbnail--activeModal');
};

const changeImage = (arrow) => {
	if (arrow === 'back') {
		indexModal--;
		if (indexModal < 0) {
			indexModal = arrayImages.length - 1;
		}
	}
	if (arrow === 'forward') {
		indexModal++;
		if (indexModal >= arrayImages.length) {
			indexModal = 0;
		}
	}
	initialImageModal(indexModal);
	modalImg.classList.add('lightbox__img--animation');
};

const addtoBasket = () => {
	basketContent.textContent = '';
	if (Number(pickerNumber.textContent) === 0) {
		contentBasketEmpty();
	} else {
		contentBasketFill();
	}
};
pickerMinus.addEventListener('click', () => {
	countBasketNumber = countBasketNumber - 1;
	if (countBasketNumber < 0) {
		countBasketNumber = 0;
	}
	pickerNumber.textContent = countBasketNumber;
});

pickerPlus.addEventListener('click', () => {
	countBasketNumber = countBasketNumber + 1;
	pickerNumber.textContent = countBasketNumber;
});

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

arrowPreviousModal.addEventListener('click', () => {
	changeImage('back');
});

arrowNextModal.addEventListener('click', () => {
	changeImage('forward');
});

cart.addEventListener('click', () => {
	basketModal.classList.toggle('basket__modal--active');
});

imagesThumbnail.forEach((img) => {
	img.addEventListener('click', (e) => {
		activeImg(e);
	});
});

imagesThumbnailModal.forEach((img) => {
	img.addEventListener('click', (e) => {
		activeImgModal(e);
	});
});

imgLightBox.addEventListener('animationend', () => {
	imgLightBox.classList.remove('lightbox__img--animation');
});
modalImg.addEventListener('animationend', () =>
	modalImg.classList.remove('lightbox__img--animation')
);

imgLightBox.addEventListener('click', (e) => {
	let routeImg = e.target.src.slice(29);
	let actualImg = arrayImages.indexOf(routeImg);
	indexModal = actualImg;
	initialImageModal(indexModal);
	lightboxModal.classList.add('lightbox__modal--active');
});

modalIconClose.addEventListener('click', () => {
	lightboxModal.classList.remove('lightbox__modal--active');
	imagesThumbnailModal.forEach((img) => {
		img.classList.remove('img__thumbnail--activeModal');
	});
});

addToCart.addEventListener('click', () => {
	arrayAmount.unshift(countBasketNumber)
	addtoBasket();
	countBasketNumber = 0;
	pickerNumber.textContent = 0;
	amountBasketNumber.textContent = arrayAmount.reduce((acc,item)=>acc+item,0)
});

window.addEventListener('DOMContentLoaded', () => {
	initialImage(index);
	initialImageModal(indexModal);
	contentBasketEmpty();
	localStorage.removeItem('amount')
	pickerNumber.textContent = countBasketNumber;
	amountBasketNumber.textContent = countBasketNumber;
});
