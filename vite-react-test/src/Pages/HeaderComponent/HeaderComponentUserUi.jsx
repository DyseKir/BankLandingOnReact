import './HeaderComponentUserUi.scss'
import UserUiComponent from './UserUiComponent/UserUiComponent'
import HeaderBurgerMenuComponent from './HeaderBurgerMenuComponent/HeaderBurgerMenuComponent'
import HeaderLogoComponent from './HeaderLogoComponent/HeaderLogoComponent'
import HeaderNavLinksComponent from './HeaderNavLinksComponent/HeaderNavLinksComponent'

function HeaderComponentUserUi() {
	return (
		<>
			<header>
				<nav className='header'>
					<HeaderLogoComponent />
					<HeaderNavLinksComponent />
					<UserUiComponent />
					<HeaderBurgerMenuComponent />
				</nav>
			</header>
		</>
	)
}

export default HeaderComponentUserUi
