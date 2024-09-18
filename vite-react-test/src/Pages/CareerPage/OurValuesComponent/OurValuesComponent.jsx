import './OurValuesComponent.scss'

function OurValuesComponent() {
	return (
		<section className='OurValuesSection'>
			<div className='OurValuesSection__wrapper'>
				<div className='OurValuesSection__wrapper-title-block'>
					<h2 className='OurValuesSection__title'>
						Our <span className='OurValuesSection__title-span'>Values</span>
					</h2>
					<p className='OurValuesSection__text'>
						At YourBank, our values form the foundation of our organization and
						guide our actions. We believe in upholding the highest standards of
						integrity, delivering exceptional service, and embracing innovation.
						These values define our culture and shape the way we work together
						to achieve our goals.
					</p>
				</div>
			</div>

			<div className='OurValuesSection__wrapper-article-block'>
				<div className='OurValuesSection__wrapper-article'>
					<div className='OurValuesSection__article-block'>
						<article className='OurValuesSection__article'>
							<h3 className='OurValuesSection__article-title'>Integrity</h3>
							<p className='OurValuesSection__article-text'>
								We conduct ourselves with utmost honesty, transparency, and
								ethical behavior. We believe in doing what is right for our
								customers, colleagues, and stakeholders, even when faced with
								difficult choices.
							</p>
						</article>
						<article className='OurValuesSection__article'>
							<h3 className='OurValuesSection__article-title'>
								Customer Centricity
							</h3>
							<p className='OurValuesSection__article-text'>
								Our customers are at the heart of everything we do. We are
								dedicated to understanding their needs, providing personalized
								solutions, and delivering exceptional service that exceeds
								expectations.
							</p>
						</article>
					</div>
				</div>
				<div className='OurValuesSection__article-block'>
					<article className='OurValuesSection__article'>
						<h3 className='OurValuesSection__article-title'>Collaboration</h3>
						<p className='OurValuesSection__article-text'>
							We foster a collaborative and inclusive work environment, where
							teamwork and diversity are celebrated. By leveraging the unique
							strengths and perspectives of our employees, we drive innovation
							and achieve greater success together.
						</p>
					</article>
					<article className='OurValuesSection__article'>
						<h3 className='OurValuesSection__article-title'>Innovation</h3>
						<p className='OurValuesSection__article-text'>
							We embrace change and constantly seek innovative solutions to meet
							the evolving needs of our customers. We encourage our employees to
							think creatively, challenge conventions, and explore new ideas to
							drive the future of banking.
						</p>
					</article>
				</div>
			</div>
		</section>
	)
}

export default OurValuesComponent
