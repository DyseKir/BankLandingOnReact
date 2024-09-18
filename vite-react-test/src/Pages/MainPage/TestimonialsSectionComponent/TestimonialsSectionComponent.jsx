import React, { useState, useEffect } from 'react'
import './TestimonialsSectionComponent.scss'
import TestimonialsSectionButtons from './TestimonialsSectionButtons/TestimonialsSectionButtons'
import TestimonialCardComponent from './TestimonialCardComponent/TestimonialCardComponent'

function TestimonialsSectionComponent() {
	const [activeButton, setActiveButton] = useState('individual')
	const [testimonials, setTestimonials] = useState({})
	const [currentIndex, setCurrentIndex] = useState(0)
	const [carouselItems, setCarouselItems] = useState([])

	useEffect(() => {
		fetch('/Cards-info.json')
			.then(response => response.json())
			.then(data => {
				setTestimonials(data.testimonials)
				setCarouselItems(data.testimonials[activeButton] || [])
			})
			.catch(error => {
				console.error('Error loading JSON:', error)
			})
	}, [])

	useEffect(() => {
		setCarouselItems(testimonials[activeButton] || [])
		setCurrentIndex(0)
	}, [activeButton, testimonials])

	const handleButtonClick = buttonType => {
		setActiveButton(buttonType)
	}

	const handleNext = () => {
		const totalItems = carouselItems.length
		if (totalItems > 0) {
			setCurrentIndex(prevIndex => (prevIndex + 1) % totalItems)
		}
	}

	const handlePrev = () => {
		const totalItems = carouselItems.length
		if (totalItems > 0) {
			setCurrentIndex(prevIndex => (prevIndex - 1 + totalItems) % totalItems)
		}
	}

	const visibleTestimonials =
		carouselItems.length > 0
			? [
					carouselItems[currentIndex % carouselItems.length],
					carouselItems[(currentIndex + 1) % carouselItems.length],
					carouselItems[(currentIndex + 2) % carouselItems.length],
			  ]
			: []

	return (
		<section className='testimonials-section'>
			<div className='testimonials-section__wrapper'>
				<div className='testimonials-section__title-block-wrapper'>
					<div className='testimonials-section__title-block'>
						<h2 className='testimonials-section__title'>
							Our{' '}
							<span className='testimonials-section__span'>Testimonials</span>
						</h2>
						<p className='testimonials-section__text'>
							Discover how YourBank has transformed lives with innovative
							digital solutions and personalized customer service. See why our
							clients trust us for a secure and prosperous financial journey.
						</p>
					</div>
					<TestimonialsSectionButtons
						activeButton={activeButton}
						onButtonClick={handleButtonClick}
					/>
				</div>

				<div className='testimonials-section__carousel-wrapper'>
					<img
						src='/Button-home-page.svg'
						alt='left-arrow'
						className='testimonials-section__carousel-left-arrow'
						onClick={handlePrev}
					/>
					<div className='testimonials-section__carousel'>
						{visibleTestimonials.length > 0 ? (
							visibleTestimonials.map((testimonial, index) => (
								<TestimonialCardComponent
									key={index}
									testimonial={testimonial}
									visible
								/>
							))
						) : (
							<p>Loading...</p>
						)}
					</div>
					<img
						src='/Button-home-page-1.svg'
						alt='right-arrow'
						className='testimonials-section__carousel-right-arrow'
						onClick={handleNext}
					/>
				</div>
			</div>
		</section>
	)
}

export default TestimonialsSectionComponent
