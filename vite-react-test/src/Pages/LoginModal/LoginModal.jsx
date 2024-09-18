import './LoginModal.scss'

function LoginModal() {
	// Define the handleSubmit function
	const handleSubmit = event => {
		event.preventDefault() // Prevent the form from submitting the traditional way
		// Add your form submission logic here, like sending data to an API
		console.log('Form submitted')
	}

	return (
		<div className='log-in-modal'>
			<div className='log-in-modal__title-block'>
				<h2 className='log-in-modal__title'>Log In</h2>
				<p className='log-in-modal__text'>
					Welcome back! Log in to access your account and enjoy our exclusive
					features and personalized experiences.
				</p>
			</div>
			<div className='log-in-modal__input-block-wrapper'>
				<form className='log-in-modal__input-block' onSubmit={handleSubmit}>
					<input
						className='log-in-modal__input'
						type='email'
						id='loginEmail'
						placeholder='Enter your Email'
						required
					/>
					<input
						className='log-in-modal__input'
						type='password'
						id='loginPassword'
						placeholder='Enter your Password'
						required
					/>
				</form>
				<div className='log-in-modal__pass-link-wrapper'>
					<a href='/forgot-password' className='log-in-modal__pass-link'>
						Forgot Password?
					</a>
				</div>
			</div>
			<div className='log-in-modal__buttons-block'>
				<button className='log-in-modal__log-btn' type='button'>
					Log In
				</button>
				<button className='log-in-modal__sign-btn' type='button'>
					Sign Up
				</button>
				<div className='log-in-modal__continue-wrapper'>
					<p className='log-in-modal__continue-text'>Or Continue with</p>
				</div>
				<div className='log-in-modal__social-icons'>
					<img
						className='log-in-modal__social-icon'
						src='/modal-svg-1.svg'
						alt='Google'
					/>
					<img
						className='log-in-modal__social-icon'
						src='/modal-svg-2.svg'
						alt='Facebook'
					/>
					<img
						className='log-in-modal__social-icon'
						src='/modal-svg-3.svg'
						alt='Apple'
					/>
				</div>
			</div>
		</div>
	)
}

export default LoginModal
