import React from 'react'
import './ExchangeButton.scss'

function ExchangeButton({ onClick }) {
	return (
		<button
			onClick={onClick}
			type='button'
			className='transactions__exchange-btn'
			aria-label='Exchange Currency'
		>
			Exchange
		</button>
	)
}

export default ExchangeButton
