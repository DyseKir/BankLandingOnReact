import React, { useState } from 'react'
import './UserUiComponent.scss'
import UserUiCustomSelect from './UserUiCustomSelect/UserUiCustomSelect'

function UserUiComponent() {
	const options = [
		{ label: 'USD', text: 'US Dollars', image: '/Image-home-page-1.svg' },
		{ label: 'INR', text: 'Indian Rupees', image: '/Image-home-page.svg' },
		{ label: 'EUR', text: 'Euros', image: '/Image-home-page-2.svg' },
		{ label: 'JPY', text: 'Japan Yen', image: '/Image-home-page-3.svg' },
		{
			label: 'UAH',
			text: 'Ukrainian Hryvnia',
			image: '/Image-home-page-4.svg',
		},
		{
			label: 'KZT',
			text: 'Kazakhstani Tenge',
			image: '/Image-home-page-5.svg',
		},
	]

	const [selectedOption, setSelectedOption] = useState(options[0])

	const filteredOptions = options.filter(
		option => option.label !== selectedOption.label
	)

	const handleOptionChange = option => {
		setSelectedOption(option)
	}

	return (
		<div className='UserUiComponent-form-container'>
			<UserUiCustomSelect
				options={filteredOptions}
				selectedOption={selectedOption}
				onOptionChange={handleOptionChange}
			/>
			<div className='UserUiComponent'>
				<img
					className='UserUiComponent-img'
					src='/user-img-1.svg'
					alt='User avatar'
				/>
				<p className='UserUiComponent-userName'>KirVish</p>
			</div>
		</div>
	)
}

export default UserUiComponent
