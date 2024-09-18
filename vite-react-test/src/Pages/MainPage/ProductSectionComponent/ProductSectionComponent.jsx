import React, { useState, useEffect } from 'react'
import './ProductSectionComponent.scss'
import ProductSectionButtons from './ProductSectionButtons/ProductSectionButtons'
import ProductCardComponent from './ProductCardComponent/ProductCardComponent'

function ProductSectionComponent() {
	const [activeButton, setActiveButton] = useState('individual')
	const [visible, setVisible] = useState(false)
	const [products, setProducts] = useState({})

	useEffect(() => {
		fetch('/Cards-info.json')
			.then(response => response.json())
			.then(data => {
				setProducts(data['Product-section']) // Подключаем данные продуктов из JSON
				setVisible(true) // Показать карточки при первом рендере
			})
			.catch(error => {
				console.error('Error loading JSON:', error)
			})
	}, [])

	const handleButtonClick = buttonType => {
		setVisible(false) // Скрыть карточки перед сменой данных
		setTimeout(() => {
			setActiveButton(buttonType)
			setVisible(true) // Показать карточки с новыми данными
		}, 800) // Время анимации совпадает с временем transition
	}

	return (
		<section className='product-section'>
			<div className='product-section__wrapper-block'>
				<div className='product-section__wrapper-text'>
					<h2 className='product-section__logo-text'>
						Our <span className='product-section__logo-span'>Products</span>
					</h2>
					<p className='product-section__text'>
						Discover a range of comprehensive and customizable banking products
						at YourBank, designed to suit your unique financial needs and
						aspirations.
					</p>
				</div>
				<ProductSectionButtons
					activeButton={activeButton}
					onButtonClick={handleButtonClick}
				/>
			</div>
			<div className='article-wrapper'>
				{products[activeButton] && products[activeButton].length > 0 ? (
					products[activeButton].map((product, index) => (
						<ProductCardComponent
							key={index}
							product={product}
							visible={visible}
						/>
					))
				) : (
					<p>Loading...</p>
				)}
			</div>
		</section>
	)
}

export default ProductSectionComponent
