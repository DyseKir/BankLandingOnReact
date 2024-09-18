import './StartFinancialJourneyComponent.scss'
import { Link } from 'react-router-dom'
function StartFinancialJourneyComponent() {
	return (
		<div className='start-financial-journey'>
			<div className='start-financial-journey-wrapper'>
				<div className='start-financial-journey-wrapper__text-block'>
					<h4 className='start-financial-journey-wrapper__title'>
						Start your financial journey with
						<span className='start-financial-journey-wrapper__span'>
							YourBank today!
						</span>
					</h4>
					<p className='start-financial-journey-wrapper__text'>
						Ready to take control of your finances? Join YourBank now, and let
						us help you achieve your financial goals with our tailored solutions
						and exceptional customer service.
					</p>
				</div>
				<Link to='/signup' className='start-financial-journey-wrapper__link'>
					<button
						type='button'
						className='start-financial-journey-wrapper__open-btn'
					>
						Open Account
					</button>
				</Link>
			</div>
		</div>
	)
}

export default StartFinancialJourneyComponent
