import { useLocation, Link } from 'react-router-dom'
import './HeaderNavLinksComponent.scss'

function HeaderNavLinksComponent() {
	const location = useLocation()

	return (
		<ul className='header__list'>
			<li className='header__item'>
				<Link
					to='/'
					className={`header__link ${
						location.pathname === '/' ? 'header__link--active--header' : ''
					}`}
				>
					Home
				</Link>
			</li>
			<li className='header__item'>
				<Link
					to='/career'
					className={`header__link ${
						location.pathname === '/career'
							? 'header__link--active--header'
							: ''
					}`}
				>
					Careers
				</Link>
			</li>
			<li className='header__item'>
				<Link
					to='/about'
					className={`header__link ${
						location.pathname === '/about' ? 'header__link--active--header' : ''
					}`}
				>
					About
				</Link>
			</li>
			<li className='header__item'>
				<Link
					to='/security'
					className={`header__link ${
						location.pathname === '/security'
							? 'header__link--active--header'
							: ''
					}`}
				>
					Security
				</Link>
			</li>
		</ul>
	)
}

export default HeaderNavLinksComponent
