import React, { useState, useContext } from 'react'
import './UserUiComponent.scss'
import UserUiCustomSelect from './UserUiCustomSelect/UserUiCustomSelect'
import { CurrencyContext } from '../../../CurrencyContext' // Импортируем контекст

function UserUiComponent() {
	const userProfile = {
		name: 'KirVish',
		image: '/user-img-1.svg',
	}
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

	const { selectedCurrency, handleCurrencyChange } = useContext(CurrencyContext) // Достаем данные из контекста
	const [selectedOption, setSelectedOption] = useState(
		options.find(option => option.label === selectedCurrency)
	)

	const filteredOptions = options.filter(
		option => option.label !== selectedOption.label
	)

	const handleOptionChange = option => {
		setSelectedOption(option)
		handleCurrencyChange(option.label) // Меняем валюту в контексте
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
					src={userProfile.image}
					alt='User avatar'
				/>
				<p className='UserUiComponent-userName'>{userProfile.name}</p>
			</div>
		</div>
	)
}

export default UserUiComponent
