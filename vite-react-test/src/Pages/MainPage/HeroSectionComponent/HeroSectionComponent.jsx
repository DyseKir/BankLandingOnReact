import CustomSelect from './CustomSelect/CustomSelect'
import CustomValueInput from './CustomValueInput/CustomValueInput'
import TransactionBlock from './TransactionBlock/TransactionBlock'
import ExchangeButton from './ExchangeButton/ExchangeButton'
import './HeroSectionComponent.scss'
import selectClasses from './CustomSelect/CustomSelect.module.scss'
import inputClasses from './CustomValueInput/CustomValueInput.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const options = [
	{ label: 'USD', text: 'US Dollars', image: '/Image-home-page-1.svg' },
	{ label: 'INR', text: 'Indian Rupees', image: '/Image-home-page.svg' },
	{ label: 'EUR', text: 'Euros', image: '/Image-home-page-2.svg' },
	{ label: 'JPY', text: 'Japan Yen', image: '/Image-home-page-3.svg' },
	{ label: 'UAH', text: 'Ukrainian Hryvnia', image: '/Image-home-page-4.svg' },
	{ label: 'KZT', text: 'Kazakhstani Tenge', image: '/Image-home-page-5.svg' },
]

function HeroSectionComponent() {
	const getConversionRate = (fromCurrency, toCurrency) => {
		if (fromCurrency === 'USD' && toCurrency === 'EUR') return 0.85
		if (fromCurrency === 'EUR' && toCurrency === 'USD') return 1.18

		if (fromCurrency === 'USD' && toCurrency === 'INR') return 73.5
		if (fromCurrency === 'INR' && toCurrency === 'USD') return 0.014

		if (fromCurrency === 'USD' && toCurrency === 'JPY') return 110.6
		if (fromCurrency === 'JPY' && toCurrency === 'USD') return 0.009

		if (fromCurrency === 'USD' && toCurrency === 'UAH') return 27.0
		if (fromCurrency === 'UAH' && toCurrency === 'USD') return 0.037

		if (fromCurrency === 'USD' && toCurrency === 'KZT') return 425.0
		if (fromCurrency === 'KZT' && toCurrency === 'USD') return 0.0024

		if (fromCurrency === 'EUR' && toCurrency === 'INR') return 86.5
		if (fromCurrency === 'INR' && toCurrency === 'EUR') return 0.012

		if (fromCurrency === 'EUR' && toCurrency === 'JPY') return 129.8
		if (fromCurrency === 'JPY' && toCurrency === 'EUR') return 0.0077

		if (fromCurrency === 'EUR' && toCurrency === 'UAH') return 31.5
		if (fromCurrency === 'UAH' && toCurrency === 'EUR') return 0.032

		if (fromCurrency === 'EUR' && toCurrency === 'KZT') return 500.0
		if (fromCurrency === 'KZT' && toCurrency === 'EUR') return 0.002

		if (fromCurrency === 'INR' && toCurrency === 'JPY') return 1.5
		if (fromCurrency === 'JPY' && toCurrency === 'INR') return 0.67

		if (fromCurrency === 'INR' && toCurrency === 'UAH') return 0.37
		if (fromCurrency === 'UAH' && toCurrency === 'INR') return 2.7

		if (fromCurrency === 'INR' && toCurrency === 'KZT') return 5.8
		if (fromCurrency === 'KZT' && toCurrency === 'INR') return 0.17

		if (fromCurrency === 'JPY' && toCurrency === 'UAH') return 0.25
		if (fromCurrency === 'UAH' && toCurrency === 'JPY') return 4.0

		if (fromCurrency === 'JPY' && toCurrency === 'KZT') return 3.3
		if (fromCurrency === 'KZT' && toCurrency === 'JPY') return 0.3

		if (fromCurrency === 'UAH' && toCurrency === 'KZT') return 15.7
		if (fromCurrency === 'KZT' && toCurrency === 'UAH') return 0.064

		// Default conversion rate
		return 1.0
	}
	const [firstSelectedOption, setFirstSelectedOption] = useState(options[0])
	const [secondSelectedOption, setSecondSelectedOption] = useState(
		options.find(option => option.label !== options[0].label)
	)
	const [firstInputValue, setFirstInputValue] = useState('')
	const [secondInputValue, setSecondInputValue] = useState('')

	const handleFirstSelectChange = option => {
		setFirstSelectedOption(option)
		if (option.label === secondSelectedOption.label) {
			setSecondSelectedOption(options.find(opt => opt.label !== option.label))
		}
		updateConversion(option, secondSelectedOption, firstInputValue)
	}

	const handleSecondSelectChange = option => {
		setSecondSelectedOption(option)
		if (option.label === firstSelectedOption.label) {
			setFirstSelectedOption(options.find(opt => opt.label !== option.label))
		}
		updateConversion(firstSelectedOption, option, secondInputValue)
	}

	const updateConversion = (firstOption, secondOption, value) => {
		const conversionRate = getConversionRate(
			firstOption.label,
			secondOption.label
		)
		const convertedValue = (value * conversionRate).toFixed(2)
		if (firstOption === firstSelectedOption) {
			setSecondInputValue(convertedValue)
		} else {
			setFirstInputValue(convertedValue)
		}
	}
	const exchangeValues = () => {
		//Input
		const getAValue = firstInputValue
		console.log(getAValue)
		const getBValue = secondInputValue
		console.log(getBValue)

		const getACourse = firstSelectedOption
		console.log(getACourse)
		const getBCourse = secondSelectedOption
		console.log(getBCourse)
	}

	return (
		<section className='hero-section'>
			<div className='hero-section__open-acc-container'>
				<div className='hero-section__open-acc-container-block'>
					<div className='hero-section__lcc-container'>
						<img
							className='hero-section__lcc-container-svg'
							src='/Icon-home-page.svg'
							alt='LLC icon'
						/>
						<p className='hero-section__open-acc-container-llc-text'>
							No LLC Required, No Credit Check.
						</p>
					</div>
					<h1 className='hero-section__title'>
						Welcome to YourBank, Empowering Your
						<span className='hero-section__title-span'> Financial Journey</span>
					</h1>
					<p className='hero-section__text'>
						At YourBank, our mission is to provide comprehensive banking
						solutions that empower individuals and businesses to achieve their
						financial goals. We are committed to delivering personalized and
						innovative services that prioritize our customers' needs.
					</p>
				</div>
				<Link to='/signup' className='hero-section__open-acc-container-btn'>
					<button
						type='button'
						className='hero-section__open-btn'
						aria-label='Open Account'
					>
						Open Account
					</button>
				</Link>
			</div>

			<div className='transactions'>
				<div className='transactions__monthly-income'>
					<img
						className='transactions__monthly-income-sv'
						src='/Icon-Container-home-page.svg'
						alt='Plus icon'
					/>
					<div className='transactions__monthly-income-wrapper'>
						<span className='transactions__monthly-income-span'>
							+ $5000.00
						</span>
						<p className='transactions__monthly-income-text'>Monthly Income</p>
					</div>
				</div>
				<h3 className='transactions__title'>Your Transactions</h3>
				<div className='transactions__container'>
					<TransactionBlock
						imageSrc='/Sub-Container-home-page.svg'
						altText='Exchange icon'
						text='Transaction'
						spanText='Joel Kenley'
						value='-$68.00'
						className='mainBlock'
					/>
					<TransactionBlock
						imageSrc='/Sub-Container-home-page.svg'
						altText='Exchange icon'
						text='Transaction'
						spanText='Joel Kenley'
						value='-$68.00'
						className='midleBlock'
					/>
					<TransactionBlock
						imageSrc='/Sub-Container-home-page.svg'
						altText='Exchange icon'
						text='Transaction'
						spanText='Joel Kenley'
						value='-$68.00'
						className='lastBlock'
					/>
				</div>
				<h3 className='transactions__title'>Money Exchange</h3>
				<div className='transactions__exchange-container'>
					<div className='transactions__exchange-container-1'>
						<CustomSelect
							options={options}
							additionalClass={selectClasses['custom-select-variant-1']}
							selectedOption={firstSelectedOption}
							onOptionChange={handleFirstSelectChange}
							disabledOption={secondSelectedOption.label}
						/>
						<CustomSelect
							options={options}
							additionalClass={selectClasses['custom-select-variant-2']}
							selectedOption={secondSelectedOption}
							onOptionChange={handleSecondSelectChange}
							disabledOption={firstSelectedOption.label}
						/>
					</div>
					<div className='transactions__exchange-container-2'>
						<CustomValueInput
							placeholder='Enter Amount'
							value={firstInputValue}
							onValueChange={value => {
								setFirstInputValue(value)
								updateConversion(
									firstSelectedOption,
									secondSelectedOption,
									value
								)
							}}
						/>
						<CustomValueInput
							placeholder='Get Amount'
							value={secondInputValue}
							additionalClass={inputClasses['custom-value-input-variant-2']}
							onValueChange={value => {
								setSecondInputValue(value)
								updateConversion(
									secondSelectedOption,
									firstSelectedOption,
									value
								)
							}}
						/>
					</div>
				</div>
				<ExchangeButton onClick={exchangeValues} />
				<div className='supported-cur-block'>
					<p className='supported-cur-block__text'>Supported Currency</p>
					<div className='supported-cur-block__wrapper'>
						<img
							className='supported-cur-block__wrapper-svg'
							src='/Icon-home-page-1.svg'
							alt='USD icon'
						/>
						<img
							className='supported-cur-block__wrapper-svg'
							src='/Icon-home-page-2.svg'
							alt='Euro icon'
						/>
						<img
							className='supported-cur-block__wrapper-svg'
							src='/Icon-home-page-3.svg'
							alt='BTC icon'
						/>
						<img
							className='supported-cur-block__wrapper-svg'
							src='/Icon-home-page-4.svg'
							alt='ETH icon'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSectionComponent
