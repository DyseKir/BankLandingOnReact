// useCurrencySelection.js
import { useState } from 'react'
import { getConversionRate } from './currencyLogic'

export const useCurrencySelection = initialOptions => {
	const [firstSelectedOption, setFirstSelectedOption] = useState(
		initialOptions[0]
	)
	const [secondSelectedOption, setSecondSelectedOption] = useState(
		initialOptions[1]
	)
	const [firstInputValue, setFirstInputValue] = useState('')
	const [secondInputValue, setSecondInputValue] = useState('')

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

	return {
		firstSelectedOption,
		setFirstSelectedOption,
		secondSelectedOption,
		setSecondSelectedOption,
		firstInputValue,
		setFirstInputValue,
		secondInputValue,
		setSecondInputValue,
		updateConversion,
	}
}
