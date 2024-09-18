import React from 'react'
import './TestimonialsSectionButtons.scss'

function TestimonialsSectionButtons({ activeButton, onButtonClick }) {
	return (
		<div className='testimonials-section__buttons'>
			<button
				className={`testimonials-section__button-indiv ${
					activeButton === 'individual' ? 'active' : ''
				}`}
				onClick={() => onButtonClick('individual')}
				type='button'
			>
				For Individuals
			</button>
			<button
				className={`testimonials-section__button-business ${
					activeButton === 'business' ? 'active' : ''
				}`}
				onClick={() => onButtonClick('business')}
				type='button'
			>
				For Businesses
			</button>
		</div>
	)
}

export default TestimonialsSectionButtons
