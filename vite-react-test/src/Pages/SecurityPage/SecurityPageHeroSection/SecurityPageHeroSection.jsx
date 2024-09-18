import './SecurityPageHeroSection.scss'

function SecurityPageHeroSection() {
	return (
		<section className='SecurityPageHeroSection'>
			<div className='SecurityPageHeroSection__title-wrapper'>
				<div className='SecurityPageHeroSection__title-block'>
					<div>
						<h2 className='SecurityPageHeroSection__title'>
							Your Security is Our
							<span className='SecurityPageHeroSection__title-span'>
								Top Priority
							</span>
						</h2>
					</div>
					<p className='SecurityPageHeroSection__description'>
						At YourBank, we understand the importance of keeping your financial
						information secure. We employ robust security measures and advanced
						technologies to protect your personal and financial data. Rest
						assured that when you bank with us, your security is our utmost
						priority.
					</p>
				</div>
				<img
					src='/security-hero-section-svg.svg'
					alt=''
					className='SecurityPageHeroSection__img'
				/>
			</div>
		</section>
	)
}

export default SecurityPageHeroSection
