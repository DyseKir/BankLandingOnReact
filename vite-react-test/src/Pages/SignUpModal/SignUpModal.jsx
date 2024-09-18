import { useState } from 'react'
import './SignUpModal.scss'

function SignUpModal() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	})

	const [errors, setErrors] = useState({})

	const handleInputChange = event => {
		const { name, value } = event.target
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value,
		}))

		setErrors(prevErrors => ({
			...prevErrors,
			[name]: '',
		}))
	}

	const handleSubmit = event => {
		event.preventDefault()
		const errorMessages = {}

		if (!formData.firstName || !/^[A-Za-zА-Яа-я]+$/.test(formData.firstName)) {
			errorMessages.firstName = 'First name should contain only letters'
		}

		if (!formData.lastName || !/^[A-Za-zА-Яа-я]+$/.test(formData.lastName)) {
			errorMessages.lastName = 'Last name should contain only letters'
		}

		if (!formData.email) {
			errorMessages.email = 'Email is required'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errorMessages.email = 'Enter a valid email address'
		}

		if (!formData.password) {
			errorMessages.password = 'Password is required'
		} else if (formData.password.length < 6) {
			errorMessages.password = 'Password must be at least 6 characters long'
		}

		setErrors(errorMessages)
	}

	return (
		<div className='sign-up-modal'>
			<div className='sign-up-modal__title-block'>
				<h2 className='sign-up-modal__title'>Sign Up</h2>
				<p className='sign-up-modal__text'>
					Join our community today! Create an account to unlock exclusive
					features and personalized experiences.
				</p>
			</div>
			<form
				className='sign-up-modal__input-block-wrapper'
				onSubmit={handleSubmit}
			>
				<div className='sign-up-modal__input-block'>
					<input
						className={`sign-up-modal__input ${
							errors.firstName ? 'invalid' : 'valid'
						}`}
						type='text'
						id='firstName'
						name='firstName'
						value={formData.firstName}
						onChange={handleInputChange}
						placeholder='Enter First Name'
					/>
					{errors.firstName && (
						<div className='error-message'>{errors.firstName}</div>
					)}

					<input
						className={`sign-up-modal__input ${
							errors.lastName ? 'invalid' : 'valid'
						}`}
						type='text'
						id='lastName'
						name='lastName'
						value={formData.lastName}
						onChange={handleInputChange}
						placeholder='Enter Last Name'
					/>
					{errors.lastName && (
						<div className='error-message'>{errors.lastName}</div>
					)}
				</div>
				<div className='sign-up-modal__input-block'>
					<input
						className={`sign-up-modal__input ${
							errors.email ? 'invalid' : 'valid'
						}`}
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleInputChange}
						placeholder='Enter your Email'
					/>
					{errors.email && <div className='error-message'>{errors.email}</div>}

					<input
						className={`sign-up-modal__input ${
							errors.password ? 'invalid' : 'valid'
						}`}
						type='password'
						id='password'
						name='password'
						value={formData.password}
						onChange={handleInputChange}
						placeholder='Enter your Password'
					/>
					{errors.password && (
						<div className='error-message'>{errors.password}</div>
					)}
				</div>
				<div className='sign-up-modal__buttons-block'>
					<button className='sign-up-modal__sign-btn' type='submit'>
						Sign Up
					</button>
					<button className='sign-up-modal__log-btn' type='button'>
						Login
					</button>
					<div className='sign-up-modal__continue-wrapper'>
						<p className='sign-up-modal__continue-text'>Or Continue with</p>
					</div>
					<div className='sign-up-modal__social-icons'>
						<img
							className='sign-up-modal__social-icon'
							src='/modal-svg-1.svg'
							alt='Google'
						/>
						<img
							className='sign-up-modal__social-icon'
							src='/modal-svg-2.svg'
							alt='Facebook'
						/>
						<img
							className='sign-up-modal__social-icon'
							src='/modal-svg-3.svg'
							alt='Apple'
						/>
					</div>
				</div>
			</form>
		</div>
	)
}

export default SignUpModal
