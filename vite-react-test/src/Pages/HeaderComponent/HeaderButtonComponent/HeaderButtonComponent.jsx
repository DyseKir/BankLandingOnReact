import { Link } from 'react-router-dom'
import './HeaderButtonComponent.scss'

function HeaderButtonComponent() {
	return (
		<>
			<Link to='/signup'>
				<button className='header__sign-button' id='signup-toggle'>
					Sign Up
				</button>
			</Link>
			<Link to='/login'>
				<button className='header__log-button active' id='login-toggle'>
					Log In
				</button>
			</Link>
		</>
	)
}

export default HeaderButtonComponent
