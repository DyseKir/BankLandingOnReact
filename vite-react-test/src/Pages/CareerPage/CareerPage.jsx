import HeroCareerPageComponent from '../../Pages/CareerPage/HeroCareerPageComponent/HeroCareerPageComponent'
import OurValuesComponent from '../../Pages/CareerPage/OurValuesComponent/OurValuesComponent'
import OurBenefitsComponent from '../../Pages/CareerPage/OurBenefitsComponent/OurBenefitsComponent'
import AskQuestionSectionComponent from '../../Pages/CareerPage/AskQuestionSectionComponent/AskQuestionSectionComponent'
import StartFinancialJourneyComponent from '../../Pages/CareerPage/StartFinancialJourneyComponent/StartFinancialJourneyComponent'
import JobOpeningsSectionComponent from './JobOpeningsSectionComponent/JobOpeningsSectionComponent'
function CareerPage() {
	return (
		<>
			<HeroCareerPageComponent />
			<OurValuesComponent />
			<OurBenefitsComponent />
			<JobOpeningsSectionComponent />
			<AskQuestionSectionComponent />
			<StartFinancialJourneyComponent />
		</>
	)
}

export default CareerPage
