import './HeaderComponent.scss'
import HeaderButtonComponent from './HeaderButtonComponent/HeaderButtonComponent'
import HeaderBurgerMenuComponent from './HeaderBurgerMenuComponent/HeaderBurgerMenuComponent'
import HeaderLogoComponent from './HeaderLogoComponent/HeaderLogoComponent'
import HeaderNavLinksComponent from './HeaderNavLinksComponent/HeaderNavLinksComponent'

function HeaderComponent() {
	return (
		<>
			<header>
				<nav className='header'>
					<HeaderLogoComponent />
					<HeaderNavLinksComponent />
					<div className='header__form-container'>
						<HeaderButtonComponent />
					</div>
					<HeaderBurgerMenuComponent />
				</nav>
			</header>
		</>
	)
}

export default HeaderComponent
