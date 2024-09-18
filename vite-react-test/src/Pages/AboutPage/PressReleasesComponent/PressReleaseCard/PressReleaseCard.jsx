function PressReleaseCard({ imageUrl, title, location, date, mainText }) {
	return (
		<article className='PressReleasesComponent__article'>
			<img src={imageUrl} alt={title} />
			<div className='PressReleasesComponent__article-text-block'>
				<div className='PressReleasesComponent__article-title-block'>
					<h3 className='PressReleasesComponent__article-title'>{title}</h3>
					<div className='PressReleasesComponent__article-text-wrapper'>
						<p className='PressReleasesComponent__article-text'>
							Location: {location}
						</p>
						<p className='PressReleasesComponent__article-text'>Date: {date}</p>
					</div>
				</div>
				<p className='PressReleasesComponent__article-main-text'>{mainText}</p>
			</div>
		</article>
	)
}

export default PressReleaseCard
