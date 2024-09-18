import './FeatureCard.scss'

function FeatureCard({ title, imageUrl, description }) {
	return (
		<article className='future-section__wrapper-block'>
			<div className='future-section__wrapper-text-block'>
				<h3 className='future-section__logo-text-2'>{title}</h3>
				<img
					className='future-section__logo-arrow'
					src={imageUrl}
					alt='Arrow icon'
				/>
			</div>
			<p className='future-section__text'>{description}</p>
		</article>
	)
}

export default FeatureCard
