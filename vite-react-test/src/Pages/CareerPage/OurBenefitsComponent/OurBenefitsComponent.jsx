import './OurBenefitsComponent.scss'

function OurBenefitsComponent() {
	return (
		<section className='ourBenefitsSection'>
			<div className='ourBenefitsSection__title-wrapper'>
				<h2 className='ourBenefitsSection__title'>
					Our <span className='ourBenefitsSection__title-span'>Benefits</span>
				</h2>
				<p className='ourBenefitsSection__text'>
					At YourBank, we value our employees and are dedicated to their
					well-being and success. We offer a comprehensive range of benefits
					designed to support their personal and professional growth.
				</p>
			</div>

			<div className='ourBenefitsSection__article-wrapper-block'>
				<div className='ourBenefitsSection__article-wrapper'>
					<article className='ourBenefitsSection__article ourBenefitsSection__article-border-1'>
						<div className='ourBenefitsSection__article-title-wrapper'>
							<img src='/careers-benefits.svg' alt='benefits' />
							<h3 className='ourBenefitsSection__article-title'>
								Competitive Compensation
							</h3>
						</div>
						<p className='ourBenefitsSection__article-text'>
							We provide a competitive salary package that recognizes the skills
							and expertise of our employees. YourBank believes in rewarding
							exceptional performance and offering opportunities for financial
							growth.
						</p>
					</article>
					<article className='ourBenefitsSection__article ourBenefitsSection__article-border-2'>
						<div className='ourBenefitsSection__article-title-wrapper'>
							<img src='/careers-benefits-2.svg' alt='benefits' />
							<h3 className='ourBenefitsSection__article-title'>
								Health and Wellness
							</h3>
						</div>
						<p className='ourBenefitsSection__article-text'>
							We prioritize the health and well-being of our employees by
							providing comprehensive medical, dental, and vision insurance
							plans. We also offer wellness programs, gym memberships, and
							resources to support a healthy lifestyle.
						</p>
					</article>
				</div>
				<div className='ourBenefitsSection__article-wrapper'>
					<article className='ourBenefitsSection__article ourBenefitsSection__article-border-3'>
						<div className='ourBenefitsSection__article-title-wrapper'>
							<img src='/careers-benefits-3.svg' alt='benefits' />
							<h3 className='ourBenefitsSection__article-title'>
								Retirement Planning
							</h3>
						</div>
						<p className='ourBenefitsSection__article-text'>
							YourBank is committed to helping employees plan for their future.
							We offer a retirement savings plan with a generous employer match
							to help them build a secure financial foundation for the long
							term.
						</p>
					</article>
					<article className='ourBenefitsSection__article ourBenefitsSection__article-border-4'>
						<div className='ourBenefitsSection__article-title-wrapper'>
							<img src='/careers-benefits-4.svg' alt='benefits' />
							<h3 className='ourBenefitsSection__article-title'>
								Work-Life Balance
							</h3>
						</div>
						<p className='ourBenefitsSection__article-text'>
							We understand the importance of maintaining a healthy work-life
							balance. YourBank offers flexible work arrangements, paid time
							off, parental leave, and other programs that support employees in
							managing their personal and professional commitments.
						</p>
					</article>
				</div>
			</div>
		</section>
	)
}

export default OurBenefitsComponent
