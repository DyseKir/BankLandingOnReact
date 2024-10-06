import React, { createContext, useState } from 'react'

export const CurrencyContext = createContext()

export const CurrencyProvider = ({ children }) => {
	const [selectedCurrency, setSelectedCurrency] = useState('USD')
	const [monthlyExchangeSum, setMonthlyExchangeSum] = useState(0)

	const handleCurrencyChange = currency => {
		setSelectedCurrency(currency)
	}

	const addToMonthlySum = amount => {
		setMonthlyExchangeSum(prevSum => prevSum + parseFloat(amount))
	}

	return (
		<CurrencyContext.Provider
			value={{
				selectedCurrency,
				handleCurrencyChange,
				monthlyExchangeSum,
				addToMonthlySum,
			}}
		>
			{children}
		</CurrencyContext.Provider>
	)
}
