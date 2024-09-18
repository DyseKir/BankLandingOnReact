import './CasesSectionComponent.scss'
import { useState } from 'react'

function CasesSectionComponent() {
	const [visibleIndiv, setVisibleIndiv] = useState(false)
	const [visibleBus, setVisibleBus] = useState(false)

	const toggleVisibilityIndiv = () => {
		setVisibleIndiv(!visibleIndiv)
	}

	const toggleVisibilityBus = () => {
		setVisibleBus(!visibleBus)
	}

	return (
		<section className='cases-section'>
			<div className='cases-section__text-wrapper'>
				<h2 className='cases-section__logo-text'>Use Cases</h2>
				<p className='cases-section__text'>
					At YourBank, we cater to the diverse needs of individuals and
					businesses alike, offering a wide range of financial solutions.
				</p>
			</div>
			<div className='individuals-block'>
				<div className='individuals-block__advantages'>
					<article className='individuals-block__article-top'>
						<img
							src='/Icon-Container-home-page-4.svg'
							alt='Personal finances'
						/>
						<p className='individuals-block__article-text'>
							Managing Personal Finances
						</p>
					</article>
					<article className='individuals-block__article-top'>
						<img
							src='/Icon-Container-home-page-5.svg'
							alt='Saving for the future'
						/>
						<p className='individuals-block__article-text'>
							Saving for the Future
						</p>
					</article>
					<article className='individuals-block__article-bottom'>
						<img src='/Icon-Container-home-page-6.svg' alt='Homeownership' />
						<p className='individuals-block__article-text'>Homeownership</p>
					</article>
					<article className='individuals-block__article-bottom'>
						<img
							src='/Icon-Container-home-page-7.svg'
							alt='Education funding'
						/>
						<p className='individuals-block__article-text'>Education Funding</p>
					</article>
				</div>
				<div className='use-case-text-block'>
					<div className='use-case-text-block__wrapper'>
						<h3 className='use-case-text-block__text-logo'>For Individuals</h3>
						<p className='use-case-text-block__text'>
							For individuals, our mortgage services pave the way to
							homeownership, and our flexible personal loans provide vital
							support during various life milestones. We also prioritize
							retirement planning, ensuring a financially secure future for our
							customers.
						</p>
					</div>
					<div className='use-case-text-block__article-wrapper'>
						<article className='use-case-text-block__article'>
							<p className='use-case-text-block__percent-text'>78%</p>
							<p className='use-case-text-block__text'>
								Secure Retirement Planning
							</p>
						</article>
						<article className='use-case-text-block__article'>
							<p className='use-case-text-block__percent-text'>63%</p>
							<p className='use-case-text-block__text'>
								Manageable Debt Consolidation
							</p>
						</article>
						<article className='use-case-text-block__article'>
							<p className='use-case-text-block__percent-text'>91%</p>
							<p className='use-case-text-block__text'>
								Reducing Financial Burdens
							</p>
						</article>
					</div>
					<button
						type='button'
						className='use-case-text-block__btn'
						onClick={toggleVisibilityIndiv}
					>
						Learn More
					</button>
					{visibleIndiv && (
						<div className='use-case-text-block__more-info-block-indiv'>
							<p className='use-case-text-block__more-info-text-indiv'>
								Explore how our mortgage services can help you achieve your
								dream of homeownership. Learn more about our personal loans that
								offer financial flexibility during life's important moments, and
								discover how our retirement planning services can secure your
								financial future.
							</p>
						</div>
					)}
				</div>
			</div>
			<div className='business-block'>
				<div className='business-block__advantages'>
					<article className='business-block__article-top'>
						<img
							src='/Icon-Container-home-page-8.svg'
							alt='Startups and entrepreneurs'
						/>
						<p className='business-block__article-text'>
							Startups and Entrepreneurs
						</p>
					</article>
					<article className='business-block__article-top'>
						<img
							src='/Icon-Container-home-page-9.svg'
							alt='Cash flow management'
						/>
						<p className='business-block__article-text'>Cash Flow Management</p>
					</article>
					<article className='business-block__article-bottom'>
						<img
							src='/Icon-Container-home-page-10.svg'
							alt='Business expansion'
						/>
						<p className='business-block__article-text'>Business Expansion</p>
					</article>
					<article className='business-block__article-bottom'>
						<img
							src='/Icon-Container-home-page-11.svg'
							alt='Payment solutions'
						/>
						<p className='business-block__article-text'>Payment Solutions</p>
					</article>
				</div>
				<div className='use-case-text-block'>
					<div className='use-case-text-block__wrapper'>
						<h3 className='use-case-text-block__text-logo'>For Businesses</h3>
						<p className='use-case-text-block__text'>
							For businesses, we empower growth with working capital solutions
							that optimize cash flow, and our tailored financing options fuel
							business expansion. Whatever your financial aspirations, YourBank
							is committed to providing the right tools and support to achieve
							them.
						</p>
					</div>
					<div className='use-case-text-block__article-wrapper'>
						<article className='use-case-text-block__article'>
							<p className='use-case-text-block__percent-text'>65%</p>
							<p className='use-case-text-block__text'>Cash Flow Management</p>
						</article>
						<article className='use-case-text-block__article'>
							<p className='use-case-text-block__percent-text'>70%</p>
							<p className='use-case-text-block__text'>
								Drive Business Expansion
							</p>
						</article>
						<article className='use-case-text-block__article'>
							<p className='use-case-text-block__percent-text'>45%</p>
							<p className='use-case-text-block__text'>
								Streamline Payroll Processing
							</p>
						</article>
					</div>
					<button
						type='button'
						className='use-case-text-block__btn'
						onClick={toggleVisibilityBus}
					>
						Learn More
					</button>
					{visibleBus && (
						<div className='use-case-text-block__more-info-block-business'>
							<p className='use-case-text-block__more-info-text-business'>
								Explore how our mortgage services can help you achieve your
								dream of homeownership. Learn more about our personal loans that
								offer financial flexibility during life's important moments, and
								discover how our retirement planning services can secure your
								financial future.
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
export default CasesSectionComponent
