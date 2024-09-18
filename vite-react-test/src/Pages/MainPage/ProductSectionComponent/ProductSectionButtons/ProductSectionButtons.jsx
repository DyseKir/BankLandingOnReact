import React from 'react'
import './ProductSectionButtons.scss'

function ProductSectionButtons({ activeButton, onButtonClick }) {
	return (
		<div className='product-section__button-container'>
			<button
				type='button'
				className={`product-section__button-indiv ${
					activeButton === 'individual' ? 'active' : ''
				}`}
				onClick={() => onButtonClick('individual')}
			>
				For Individuals
			</button>
			<button
				type='button'
				className={`product-section__button-business ${
					activeButton === 'business' ? 'active' : ''
				}`}
				onClick={() => onButtonClick('business')}
			>
				For Businesses
			</button>
		</div>
	)
}

export default ProductSectionButtons
