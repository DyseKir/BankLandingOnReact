import React, { useState, useEffect } from 'react'
import './FutureSectionComponent.scss'
import FeatureCard from './FeatureCard/FeatureCard.jsx'

function FutureSectionComponent() {
	const [features, setFeatures] = useState([])
	const [selectedCategory, setSelectedCategory] = useState('onlineBanking')
	const [activeButton, setActiveButton] = useState('onlineBanking')
	const [isVisible, setIsVisible] = useState(true)

	// Fetch the JSON data
	useEffect(() => {
		fetch('/Features-cards-info.json')
			.then(response => response.json())
			.then(data => {
				setFeatures(data)
			})
			.catch(error => console.error('Error fetching data:', error))
	}, [])

	// Update the selected category and manage visibility
	const handleCategoryChange = category => {
		setIsVisible(false) // Сначала скрываем карточки
		setTimeout(() => {
			setSelectedCategory(category)
			setActiveButton(category)
			setIsVisible(true) // Затем показываем их с задержкой
		}, 800) // Задержка в 0.8 секунд
	}

	return (
		<section className='future-section'>
			<div className='future-section__logo-block'>
				<h2 className='future-section__logo-text'>
					Our <span className='future-section__span-text'>Features</span>
				</h2>
				<p className='future-section__text'>
					Experience a host of powerful features at YourBank, including seamless
					online banking, secure transactions, and personalized financial
					insights, all designed to enhance your banking experience.
				</p>
			</div>
			<div className='future-section__wrapper'>
				<div className='future-section__buttons-block'>
					<button
						className={`future-section__button ${
							activeButton === 'onlineBanking' ? 'active' : ''
						}`}
						type='button'
						onClick={() => handleCategoryChange('onlineBanking')}
					>
						Online Banking
					</button>
					<button
						className={`future-section__button ${
							activeButton === 'financialTools' ? 'active' : ''
						}`}
						type='button'
						onClick={() => handleCategoryChange('financialTools')}
					>
						Financial Tools
					</button>
					<button
						className={`future-section__button ${
							activeButton === 'customerSupport' ? 'active' : ''
						}`}
						type='button'
						onClick={() => handleCategoryChange('customerSupport')}
					>
						Customer Support
					</button>
				</div>
				<div
					className={`future-section__wrapper-blocks ${
						isVisible ? 'visible' : ''
					}`}
				>
					{features[selectedCategory]?.map((feature, index) => (
						<FeatureCard
							key={index}
							title={feature.title}
							imageUrl={feature.imageUrl}
							description={feature.description}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default FutureSectionComponent
