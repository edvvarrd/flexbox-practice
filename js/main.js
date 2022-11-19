const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav__items')
const navItems = document.querySelectorAll('.nav__item')

const addNavItemsAnimation = () => {
	let delayTime = 0

	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const deleteNavItemsAnimation = () => {
	navItems.forEach(item => {
		item.classList.remove('nav-items-animation')
	})
}

const handleNav = () => {
	nav.classList.toggle('nav__items--active')
	addNavItemsAnimation()
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__items--active')
			deleteNavItemsAnimation()
		})
	})
}
burgerBtn.addEventListener('click', handleNav)

const heroImage = document.querySelector('hero-image')
const offersHeroImage = document.querySelector('offers')

if (navigator.userAgent.toLowerCase().indexOf('safari/') > -1 && screen.width == '1280px') {
	heroImage.classList.add('safari-hero')
	offersHeroImage.classList.add('safari-hero')
}
