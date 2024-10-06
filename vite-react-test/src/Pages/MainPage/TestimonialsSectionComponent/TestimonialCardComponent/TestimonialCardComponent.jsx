import React from 'react'
import './TestimonialCardComponent.scss'

function TestimonialCardComponent({ testimonial, visible }) {
	return (
		<article className={`testimonial-card ${visible ? 'visible' : ''}`}>
			<div className='testimonial-card__comas-block'>
				<img
					className='testimonial-card__comas'
					src={testimonial.src}
					alt={testimonial.alt}
				/>
			</div>
			<p className='testimonial-card__text'>{testimonial.text}</p>
			<p className='testimonial-card__user'>{testimonial.user}</p>
		</article>
	)
}

export default TestimonialCardComponent
