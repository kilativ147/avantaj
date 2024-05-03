const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.cars__button-next',
		prevEl: '.cars__button-prev',
	},
	spaceBetween: 20, //відстань між слайдами
	speed: 300, //швидкість зміни слайду, 300 за замовчуванням

	// loop: 'true',
	// slidesPerGroup: 1,
	slidesPerView: 4,
	rewind: true,
	effect: 'slide',
	flipEffect: {
		slideShadows: false,
		limitRotation: false, //показ лише активного слайду (якщо тру - спина останнього слайду пуста)
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		800: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		// when window width is >= 1024px
		1024: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
})
export default swiper