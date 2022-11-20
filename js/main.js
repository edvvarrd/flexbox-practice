const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav__items')
const navItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')
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
	navBtnBars.classList.remove('black-bars-color')
	addNavItemsAnimation()
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__items--active')
			deleteNavItemsAnimation()
		})
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleObserver = () => {
	const currentSection = window.scrollY
	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}
handleCurrentYear()
burgerBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
