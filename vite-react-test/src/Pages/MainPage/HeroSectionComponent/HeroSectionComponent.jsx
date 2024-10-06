import CustomSelect from './CustomSelect/CustomSelect'
import CustomValueInput from './CustomValueInput/CustomValueInput'
import TransactionBlock from './TransactionBlock/TransactionBlock'
import ExchangeButton from './ExchangeButton/ExchangeButton'
import './HeroSectionComponent.scss'
import selectClasses from './CustomSelect/CustomSelect.module.scss'
import inputClasses from './CustomValueInput/CustomValueInput.module.scss'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CurrencyContext } from '../../../CurrencyContext'
import { getConversionRate } from '../../../ExchangeLogic' // Логика конверсии

const options = [
	{ label: 'USD', text: 'US Dollars', image: '/Image-home-page-1.svg' },
	{ label: 'INR', text: 'Indian Rupees', image: '/Image-home-page.svg' },
	{ label: 'EUR', text: 'Euros', image: '/Image-home-page-2.svg' },
	{ label: 'JPY', text: 'Japan Yen', image: '/Image-home-page-3.svg' },
	{ label: 'UAH', text: 'Ukrainian Hryvnia', image: '/Image-home-page-4.svg' },
	{ label: 'KZT', text: 'Kazakhstani Tenge', image: '/Image-home-page-5.svg' },
]

function HeroSectionComponent() {
	const { selectedCurrency, addToMonthlySum } = useContext(CurrencyContext) // Основная валюта пользователя
	const [firstSelectedOption, setFirstSelectedOption] = useState(options[0])
	const [secondSelectedOption, setSecondSelectedOption] = useState(
		options.find(option => option.label !== options[0].label)
	)
	const [firstInputValue, setFirstInputValue] = useState('')
	const [secondInputValue, setSecondInputValue] = useState('')
	const [transactionResult, setTransactionResult] = useState('') // Результат конверсии для транзакции

	// Функция для конвертации первой валюты во вторую (например, USD в INR)
	const updateConversion = (firstOption, secondOption, value) => {
		const conversionRate = getConversionRate(
			firstOption.label,
			secondOption.label
		)
		const convertedValue = (value * conversionRate).toFixed(2)
		console.log(
			`Конвертация ${value} ${firstOption.label} в ${secondOption.label}: ${convertedValue}`
		)
		setSecondInputValue(convertedValue)
	}

	// Логика для вывода результата в основной валюте пользователя
	const convertToUserCurrency = (secondOption, value) => {
		// Конвертируем результат второго инпута в основную валюту
		const conversionRateToMainCurrency = getConversionRate(
			secondOption.label,
			selectedCurrency
		)
		const convertedResult = (value * conversionRateToMainCurrency).toFixed(2)
		console.log(
			`Конвертация ${value} ${secondOption.label} в основную валюту ${selectedCurrency}: ${convertedResult}`
		)
		return convertedResult
	}

	// Функция для обработки клика обмена валют
	const exchangeValues = () => {
		console.log(`Обмен значений...`)
		console.log(
			`Сумма во втором инпуте: ${secondInputValue} ${secondSelectedOption.label}`
		)
		addToMonthlySum(parseFloat(secondInputValue)) // Добавляем сумму к месячной

		// Выполняем проверку и конвертируем результат в основную валюту пользователя
		const resultInMainCurrency = convertToUserCurrency(
			secondSelectedOption,
			secondInputValue
		)
		setTransactionResult(`${resultInMainCurrency} ${selectedCurrency}`) // Сохраняем результат для блока транзакций

		console.log(
			`Результат для блока транзакций: ${resultInMainCurrency} ${selectedCurrency}`
		)
	}

	const handleFirstSelectChange = option => {
		console.log(`Выбрана первая валюта: ${option.label}`)
		setFirstSelectedOption(option)
		updateConversion(option, secondSelectedOption, firstInputValue)
	}

	const handleSecondSelectChange = option => {
		console.log(`Выбрана вторая валюта: ${option.label}`)
		setSecondSelectedOption(option)
		updateConversion(firstSelectedOption, option, secondInputValue)
	}

	useEffect(() => {
		// Обновляем transactionResult при смене основной валюты
		setTransactionResult(`0.00 ${selectedCurrency}`)
	}, [selectedCurrency])

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
						spanText='Amount' // Отображаем информацию об основной валюте
						value={transactionResult} // Отображаем результат конверсии с основной валютой
						className='mainBlock'
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
								console.log(`Ввод значения в первый инпут: ${value}`)
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
								console.log(`Ввод значения во второй инпут: ${value}`)
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
