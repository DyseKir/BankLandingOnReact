import './SecurityPage.scss'
import SecurityPageHeroSection from './SecurityPageHeroSection/SecurityPageHeroSection'
import AskQuestionSectionComponent from './AskQuestionSectionComponent/AskQuestionSectionComponent'
import OurBenefitsComponent from './OurBenefitsComponent/OurBenefitsComponent'
function SecurityPage() {
	return (
		<>
			<SecurityPageHeroSection />
			<OurBenefitsComponent />
			<AskQuestionSectionComponent />
		</>
	)
}

export default SecurityPage
