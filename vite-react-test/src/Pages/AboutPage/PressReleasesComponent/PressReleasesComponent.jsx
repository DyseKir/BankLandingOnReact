import React, { useState, useEffect } from 'react'
import './PressReleasesComponent.scss'
import PressReleaseCard from './PressReleaseCard/PressReleaseCard.jsx'

function PressReleasesComponent() {
	const [pressReleases, setPressReleases] = useState([])

	// Fetch the JSON data
	useEffect(() => {
		fetch('/Press-relise-card.json')
			.then(response => response.json())
			.then(data => {
				setPressReleases(data)
			})
			.catch(error => console.error('Error fetching data:', error))
	}, [])

	return (
		<section className='PressReleasesComponent'>
			<div className='PressReleasesComponent__wrapper-block'>
				<div className='PressReleasesComponent__title-block'>
					<h3 className='PressReleasesComponent__title'>Press Releases</h3>
					<p className='PressReleasesComponent__title-text'>
						Stay updated with the latest happenings and exciting developments at
						YourBank through our press releases.
					</p>
				</div>
				<div className='PressReleasesComponent__article-block-wrapper'>
					{pressReleases.map((release, index) => (
						<PressReleaseCard
							key={index}
							imageUrl={release.imageUrl}
							title={release.title}
							location={release.location}
							date={release.date}
							mainText={release.mainText}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default PressReleasesComponent
