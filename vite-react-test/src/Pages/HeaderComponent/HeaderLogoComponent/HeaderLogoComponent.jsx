import { Link } from 'react-router-dom'
function HeaderLogoComponent() {
	return (
		<Link to='/' className='header__logo-link'>
			<img
				className='header__logo'
				src='/header-logo-icon-1.svg'
				alt='YourBanK logo'
			/>
			<img
				className='header__text-logo'
				src='/header-logo-icon-2.svg'
				alt='YourBanK text logo'
			/>
		</Link>
	)
}

export default HeaderLogoComponent
