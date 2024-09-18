import './AboutPage.scss'
import AboutPageHeroComponent from './AboutPageHeroComponent/AboutPageHeroComponent.jsx'
import MissionVision from './MissionVision/MissionVision.jsx'
import PressReleasesComponent from './PressReleasesComponent/PressReleasesComponent.jsx'

function AboutPage() {
	return (
		<>
			<AboutPageHeroComponent />
			<MissionVision />
			<PressReleasesComponent />
		</>
	)
}

export default AboutPage
