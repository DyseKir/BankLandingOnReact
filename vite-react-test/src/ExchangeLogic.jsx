export const getConversionRate = (fromCurrency, toCurrency) => {
	const rates = {
		USD: { EUR: 0.85, INR: 73.5, JPY: 110.6, UAH: 27, KZT: 425 },
		EUR: { USD: 1.18, INR: 86.5, JPY: 129.8, UAH: 31.5, KZT: 500 },
		INR: { USD: 0.014, EUR: 0.012, JPY: 1.5, UAH: 0.37, KZT: 5.8 },
		JPY: { USD: 0.009, EUR: 0.0077, INR: 0.67, UAH: 0.25, KZT: 3.3 },
		UAH: { USD: 0.037, EUR: 0.032, INR: 2.7, JPY: 4.0, KZT: 15.7 },
		KZT: { USD: 0.0024, EUR: 0.002, INR: 0.17, JPY: 0.3, UAH: 0.064 },
	}

	return rates[fromCurrency]?.[toCurrency] || 1.0 // По умолчанию возвращаем 1:1
}
