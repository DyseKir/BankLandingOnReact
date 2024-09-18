import HeroSectionComponent from './HeroSectionComponent/HeroSectionComponent'
import ProductSectionComponent from './ProductSectionComponent/ProductSectionComponent'
import CasesSectionComponent from './CasesSectionComponent/CasesSectionComponent'
import FutureSectionComponent from './FutureSectionComponent/FutureSectionComponent'
import AskQuestionSectionComponent from './AskQuestionSectionComponent/AskQuestionSectionComponent'
import TestimonialsSectionComponent from './TestimonialsSectionComponent/TestimonialsSectionComponent'
import StartFinancialJourneyComponent from './StartFinancialJourneyComponent/StartFinancialJourneyComponent'

function MainPage() {
	return (
		<>
			<HeroSectionComponent />
			<ProductSectionComponent />
			<CasesSectionComponent />
			<FutureSectionComponent />
			<AskQuestionSectionComponent />
			<TestimonialsSectionComponent />
			<StartFinancialJourneyComponent />
		</>
	)
}

export default MainPage
