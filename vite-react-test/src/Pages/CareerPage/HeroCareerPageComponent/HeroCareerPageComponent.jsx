import './HeroCareerPageComponent.scss'

function HeroCareerPageComponent() {
	return (
		<section className='HeroCareerPageSection'>
			<div className='HeroCareerPageSection__text-block-wrapper'>
				<div className='HeroCareerPageSection__text-block'>
					<h1 className='HeroCareerPageSection__title'>
						Welcome to
						<span className='HeroCareerPageSection__title-span'>YourBank</span>
						Careers!
					</h1>
					<p className='HeroCareerPageSection__text'>
						Join our team and embark on a rewarding journey in the banking
						industry. At YourBank, we are committed to fostering a culture of
						excellence and providing opportunities for professional growth. With
						a focus on innovation, customer service, and integrity, we strive to
						make a positive impact in the lives of our customers and
						communities. Join us today and be a part of our mission to shape the
						future of banking.
					</p>
				</div>
			</div>
			<img
				src='/careers-hero-section-svg.svg'
				className='HeroCareerPageSection__hero-image'
				alt=''
			/>
		</section>
	)
}

export default HeroCareerPageComponent
