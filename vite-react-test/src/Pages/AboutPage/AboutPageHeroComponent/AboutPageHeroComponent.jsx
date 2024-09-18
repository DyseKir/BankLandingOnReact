import './AboutPageHeroComponent.scss'

function AboutPageHeroComponent() {
	return (
		<section className='about-page-section'>
			<div className='about-page-section__title-wrapper'>
				<div className='about-page-section__title-block'>
					<div>
						<p className='about-page-section__subtitle'>Welcome to YourBank</p>
						<h2 className='about-page-section__title'>
							Where Banking Meets{' '}
							<span className='about-page-section__title-span'>
								Excellence!
							</span>
						</h2>
					</div>
					<p className='about-page-section__description'>
						At YourBank, we believe that banking should be more than just
						transactions. It should be an experience that empowers individuals
						and businesses to thrive and reach their financial goals. As a
						trusted financial institution, we are committed to delivering
						exceptional banking services that go beyond expectations. With a
						focus on innovation, personalized solutions, and unwavering
						integrity, we strive to provide the best banking experience for our
						valued customers. Join us on this exciting journey and discover a
						new level of banking excellence.
					</p>
				</div>
			</div>
			<img
				src='/aboutPage-hero-svg.svg'
				alt=''
				className='about-page-section__hero-image'
			/>
		</section>
	)
}

export default AboutPageHeroComponent
