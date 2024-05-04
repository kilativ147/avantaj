const burger = document.getElementById('burger')
const navmenu = document.getElementById('navmenu')
const navLinks = document.querySelectorAll('.header__link')

const handleClickBurger = (isOpen) => {
	burger.classList.toggle('-active')
	navmenu.classList.toggle('-active')
	document.body.classList.toggle('-lock')
	if (isOpen) {
		burger.classList.remove('-active')
		navmenu.classList.remove('-active')
		document.body.classList.remove('-lock')
	}
}

burger.addEventListener('click', ()=>handleClickBurger(false))

navLinks.forEach((item) => item.addEventListener('click', ()=>handleClickBurger(true)))
